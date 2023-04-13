const express = require("express");
const app = express();

app.get("/getRandomNumbers", (req, res) => {
  const array = [324, 634, 234, 6544, 23, 76, 234, 654];

  return res.status(200).json({ randomNumbers: array });
});

app.get("/getRandomNumber", (req, res) => {
  const randomNum = Math.random();
  return res.status(200).json({ randomNumbers: randomNum });
});

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});

// var cors = require("cors");
// app.use(cors());

// app.use((req, res,next)=>{
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//   next();
// });
