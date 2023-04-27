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

module.exports.GET_MOST_EXPENCIVE_CAR = (req, res) => {
  const mostExpenciveCar = cars.reduce((acc, curr) => {
    if (acc.price > curr.price) {
      return acc;
    }

    if (acc.price < curr.price) {
      return curr;
    }
  });

  return res.status(200).json({ cars: mostExpenciveCar });
};

module.exports.INSERT_CAR = (req, res) => {
  if (req.body.model && req.body.color && req.body.price) {
    const isCarExists = !!cars.find((car) => {
      return car.model === req.body.model;
    });

    if (!isCarExists) {
      cars.push(req.body);
      return res.status(200).json({ message: "car was inserted" });
    } else {
      return res.status(400).json({ message: "Car already exists" });
    }
  } else {
    return res.status(400).json({ message: "You have provided bad data" });
  }
};

module.exports.GET_MOST_EXPENCIVE_CAR = (req, res) => {
  const mostExpenciveCar = cars.reduce((acc, curr) => {
    if (acc.price > curr.price) {
      return acc;
    }

    if (acc.price < curr.price) {
      return curr;
    }
  });

  return res.status(200).json({ cars: mostExpenciveCar });
};

module.exports.GET_ALL_CARS_BY_MAX_PRICE = (req, res) => {
  const filteredCars = cars.filter((car) => {
    return car.price <= Number(req.params.maxPrice);
  });

  return res.status(200).json({ cars: filteredCars });
};
