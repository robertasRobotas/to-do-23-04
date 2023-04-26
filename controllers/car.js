const cars = [
  { model: "Audi", color: "green", price: 234 },
  { model: "Porsche", color: "Black", price: 678 },
  { model: "BMW", color: "Black", price: 15 },
  { model: "VW", color: "Black", price: 657 },
  { model: "Ferrari", color: "Black", price: 233 },
];

module.exports.GET_ALL_CARS = (req, res) => {
  return res.status(200).json({ cars: cars });
};

module.exports.GET_SORTED_CARS_BY_PRICE = (req, res) => {
  const sortedCars = cars.sort((a, b) => {
    return b.price - a.price;
  });

  return res.status(200).json({ cars: sortedCars });
};

module.exports.CHECK_IF_CAR_EXISTS = (req, res) => {
  const model = req.params.carModel;

  const filteredCars = cars.filter((car) => {
    return car.model === model;
  });

  if (!!filteredCars.length) {
    return res.status(200).json({ status: "Car exists" });
  } else {
    return res.status(404).json({ status: "Car not exists" });
  }
};

module.exports.GET_CAR_BY_ID = (req, res) => {
  const carId = req.params.id - 1;

  return res.status(200).json({ cars: cars[carId] });
};
