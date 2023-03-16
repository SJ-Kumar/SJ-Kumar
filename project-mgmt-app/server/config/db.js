const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb + srv://sureshv:sureshv@cluster0.daogsaz.mongodb.net/storybooks?retryWrites=true&w=majority');

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};

module.exports = connectDB;