const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/aniflix-backend");
    console.log("Database connection successful");
  } catch (e) {
    console.log(e);
  }
};

module.exports = dbConnection();
