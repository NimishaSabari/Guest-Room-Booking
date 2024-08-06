const mongoose = require('mongoose');
const connectWithDB = async () => {
    mongoose.set('strictQuery', false);
    try {
      await mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('DB connected successfully');
    } catch (err) {
      console.error('DB connection failed', err);
      process.exit(1);
    }
  };
  
  module.exports = connectWithDB;
