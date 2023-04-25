const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

const cars = ["Audi, BMW, Subaru"];

app.get("/getAllCars", (req, res) => {
  return res.status(200).json({ cars: cars });
});

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});
