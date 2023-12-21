const express = require("express");
const app = express();
const mongooose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");
const route = require("./routes/userRoute");

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MongoURL;

mongooose
  .connect(URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error("DB connection error:", err);
  });
app.use("/", route);

// console.log("MongoURL", URL); //  checking

app.listen(PORT, () => {
  console.log(`Your app is running on ${PORT}`);
});
