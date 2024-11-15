const mongoose = require("mongoose");

const connectionOfDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.error(`Could not connect to MongoDB: ${err}`);
      process.exit(1);
    });
};

module.exports = connectionOfDb;
