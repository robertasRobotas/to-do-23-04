const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

const array = [324, 634, 234, 6544, 23, 76, 234, 654];

app.get("/getRandomNumbers", (req, res) => {
  return res.status(200).json({ randomNumbers: array });
});

app.get("/getRandomNumber", (req, res) => {
  const randomNum = Math.random();
  return res.status(404).json({ randomNumbers: randomNum });
});

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});
