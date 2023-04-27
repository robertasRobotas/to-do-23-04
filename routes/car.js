const express = require("express");

const router = express.Router();
const carController = require("../controllers/car");

const cars = [
  { model: "Audi", color: "green", price: 234 },
  { model: "Porsche", color: "Black", price: 678 },
  { model: "BMW", color: "Black", price: 15 },
  { model: "VW", color: "Black", price: 657 },
  { model: "Ferrari", color: "Black", price: 233 },
];

router.get("/getAllCars", carController.GET_ALL_CARS);

router.get("/getMostExpenciveCar", carController.GET_MOST_EXPENCIVE_CAR);

router.get("/getSortedCarsByPrice", carController.GET_SORTED_CARS_BY_PRICE);

router.get("/getCar/:id", carController.GET_CAR_BY_ID);

router.get("/checkIfCarExists/:carModel", carController.CHECK_IF_CAR_EXISTS);

router.get("/getTotalCarsNumber", (req, res) => {
  return res.status(200).json({ cars: cars.length });
});

router.get(
  "/getAllCarsByMaxPrice/:maxPrice",
  carController.GET_ALL_CARS_BY_MAX_PRICE
);

router.post("/insertCar", carController.INSERT_CAR);

router.delete("/removeLastCar", (req, res) => {
  cars.pop();
  return res.status(200).json({ message: "Car was removed successfully" });
});

module.exports = router;
