require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDBに接続成功しました。")
  } catch (error) {
    console.error("MongoDBに接続失敗しました。")
    process.exit(1);
  }
};

module.exports = connectDB;