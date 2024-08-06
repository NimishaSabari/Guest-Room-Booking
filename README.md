# Guest-Room-Booking

## Overview

This project is  a Saas Application[Guest Room Booking] developed using the MERN stack (MongoDB, Express.js, React.js, Node.js).
Stake holders :HouseOwners , Customers 
It allows House owners to Register their property and manage their bookings.
It aims to  allow users to search for accommodations, view details, make bookings, and manage their listings.

## Getting Started

1. **Clone the Repository:**

   ```bash
   git clone 
   ```

2. **Install dependencies:**

   Navigate to client directory and install frontend dependencies :

   ```
   npm init -y
   
   ```

   Similary navigate to api folder and install backend dependencies

   ```
   npm init -y
   ```

3. **ENV variables:**

   - create .env file in the client folder and add these variables

     #### VITE_BASE_URL= http://localhost:4000

     #### VITE_GOOGLE_CLIENT_ID= your google client id

   - create .env file in the api folder and add these variables

     #### PORT= 4000

     #### DB_URL= your db url

     #### JWT_SECRET= your secret (string)

     #### JWT_EXPIRY= 20d

     #### COOKIE_TIME= 7

     #### SESSION_SECRET= your secret session (string)

     #### CLOUDINARY_NAME= your secret session

     #### CLOUDINARY_API_KEY= your cloudinary key

     #### CLOUDINARY_API_SECRET= your cloudinary api secret

     #### CLIENT_URL= http://localhost:5173

4. **Run project:**
   - Open terminal, navigate to client directory and run below command to start frontend
   ```
       npm run dev
   ```
   - Open another terminal, navigate to api directory and run this command to start backend server
   ```
       npm start
   ```

## Features

- **User Authentication:** Users can sign up, log in, and log out securely. Passwords are hashed for security.

Google Login:** Users can sign up and log in using their gmail.

 ![Screenshot 2024-08-06 174022](https://github.com/user-attachments/assets/f9cf2158-bbef-4ed8-8777-d407033c03be)

- **Search Listings:** Users can search for accommodations.
 
![Screenshot 2024-08-06 174415](https://github.com/user-attachments/assets/4772d5b1-3fa2-4cda-8917-b89dcad419c5)

- **View Listings:** Users can view detailed information about each accommodation, including photos, descriptions, amenities.

![Screenshot 2024-08-06 174435](https://github.com/user-attachments/assets/638dc355-d73a-40c4-b161-1f18a71a7033)

- **Make Bookings:** Authenticated users can book accommodations for specific dates.

![Screenshot 2024-08-06 174810](https://github.com/user-attachments/assets/51301997-26a8-4d10-87dd-bce2668eca35)

- **Manage Listings:** Hosts can create, edit, and delete their listings.
  
![Screenshot 2024-08-06 174507](https://github.com/user-attachments/assets/54960c67-4abf-47a8-a051-9d2852dbc438)

- **Responsive Design:** The application is designed to be responsive and work seamlessly across different devices.

#DATABASE WORKING - MongodbAtlas:

![Screenshot 2024-08-06 181312](https://github.com/user-attachments/assets/4298b0bc-5037-4875-a5d2-71446bc4669b)
![Screenshot 2024-08-06 181104](https://github.com/user-attachments/assets/f8bcb16e-7377-4dbb-ae15-fdeee6ec4310)
![Screenshot 2024-08-06 181126](https://github.com/user-attachments/assets/0f1d3d3f-3d9a-4e01-a4be-2b771d6a719b)
![Screenshot 2024-08-06 181249](https://github.com/user-attachments/assets/efa82511-ce2a-4d85-a2d4-d197ca8b7734)


## Technologies Used

- **MongoDB:** NoSQL database for storing user data, listings.
- **Express.js:** Web application framework for building the backend server.
- **React.js:** JavaScript library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side code.
- **Tailwind CSS:** A utility-first CSS framework
- **Shadcn:** UI library for styling based on Tailwind CSS
- **JWT:** JSON Web Tokens for secure user authentication.
- **Cloudinary:** Cloud-based image management for storing and serving images.
- **Google Cloud:** For gmail based authentication
