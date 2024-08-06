import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AccountNav from '@/components/ui/AccountNav';
import PlaceImg from '@/components/ui/PlaceImg';
import BookingDates from '@/components/ui/BookingDates';
import Spinner from '@/components/ui/Spinner';
import axiosInstance from '@/utils/axios';

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [cancelBookingId, setCancelBookingId] = useState(null);
  const [cancelReason, setCancelReason] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const getBookings = async () => {
      try {
        const { data } = await axiosInstance.get('/bookings');
        setBookings(data.booking);
        setLoading(false);
      } catch (error) {
        console.log('Error: ', error);
        setLoading(false);
      }
    };
    getBookings();
  }, []);

  const handleCancelBooking = async () => {
    if (cancelReason.trim() === '') {
      alert('Please provide a reason for cancellation.');
      return;
    }

    try {
      const response = await axiosInstance.delete(`/bookings/${cancelBookingId}`, {
        data: { reason: cancelReason },
      });

      if (response.status === 200) {
        // Update bookings only if cancellation was successful
        setBookings(bookings.filter(booking => booking._id !== cancelBookingId));
        setSuccessMessage('Cancellation done successfully.');
      }
      
      setShowModal(false);
      setCancelReason(''); // Clear the cancellation reason after successful cancellation
    } catch (error) {
      console.log('Error cancelling booking: ', error);
    }
  };

  const openModal = (bookingId) => {
    setCancelBookingId(bookingId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCancelBookingId(null);
    setCancelReason('');
  };

  if (loading) return <Spinner />;

  return (
    <div className="flex flex-col items-center">
      <AccountNav />
      <div>
        {successMessage && (
          <div className="mt-4 text-green-500">{successMessage}</div>
        )}
        {bookings?.length > 0 ? (
          bookings.map((booking) => (
            <div
              className="mx-4 my-8 flex h-28 gap-4 overflow-hidden rounded-2xl bg-gray-200 md:h-40 lg:mx-0"
              key={booking._id}
            >
              <Link
                to={`/account/bookings/${booking._id}`}
                className="flex w-5/6"
              >
                <div className="w-2/6 md:w-1/6">
                  {booking?.place?.photos[0] && (
                    <PlaceImg
                      place={booking?.place}
                      className={'h-full w-full object-cover'}
                    />
                  )}
                </div>
                <div className="grow py-3 pr-3">
                  <h2 className="md:text-2xl">{booking?.place?.title}</h2>
                  <div className="md:text-xl">
                    <BookingDates
                      booking={booking}
                      className="mb-2 mt-4 hidden items-center text-gray-600  md:flex"
                    />
                    <div className="my-2 flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-7 w-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                        />
                      </svg>
                      <span className="text-xl md:text-2xl">
                        Total price: ₹{booking.price}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
              <button
                onClick={() => openModal(booking._id)}
                className="m-4 h-10 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          ))
        ) : (
          <div className="">
            <div className="flex flex-col justify-start">
              <h1 className="my-6 text-3xl font-semibold">Trips</h1>
              <hr className="border border-gray-300" />
              <h3 className="pt-6 text-2xl font-semibold">
                No trips booked... yet!
              </h3>
              <p>
                Time to dust off you bags and start planning your next adventure
              </p>
              <Link to="/" className="my-4">
                <div className="flex w-40 justify-center rounded-lg border border-black p-3 text-lg font-semibold hover:bg-gray-50">
                  Start Searching
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Cancel Booking Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold">Cancel Booking</h2>
            <p>Please provide a reason for cancellation:</p>
            <textarea
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
              rows="4"
              className="w-full border rounded-md p-2 mt-2"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="mr-2 h-10 rounded-lg bg-gray-300 px-4 py-2"
              >
                Cancel
              </button>
              <button
                onClick={handleCancelBooking}
                className="h-10 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Confirm Cancellation
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsPage;
