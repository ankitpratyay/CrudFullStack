require("dotenv").config();
const mongoose = require("mongoose");

module.exports = () => {
  const connection = mongoose
    .connect(process.env.MONGOOSE_DB_URL)
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.log(`unable to connect with database`);
    });
};
