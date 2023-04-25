const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cars = [
  { model: "Audi", color: "green" },
  { model: "Porsche", color: "Black" },
];

app.get("/getAllCars", (req, res) => {
  return res.status(200).json({ cars: cars });
});

app.get("/getCar/:id", (req, res) => {
  return res.status(200).json({ cars: cars[req.params.id] });
});

app.get("/getTotalCarsNumber", (req, res) => {
  return res.status(200).json({ cars: cars.length });
});

app.post("/insertCar", (req, res) => {
  if (req.body.model && req.body.color) {
    cars.push(req.body);
    return res.status(200).json({ message: "car was inserted" });
  } else {
    return res.status(400).json({ message: "You have provided bad data" });
  }
});

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});
