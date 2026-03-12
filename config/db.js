const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tanusingh132007_db_user:RDM44O78lYKzPoZT@cluster0.2cwknwy.mongodb.net/library?retryWrites=true&w=majority"
    );
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;

