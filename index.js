const express = require("express");
const app = express();
var cors = require("cors");
const bodyParser = require("body-parser");
const carRouter = require("./routes/car");

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(carRouter);

app.listen(8081, () => {
  console.log("Your app is alive!!!!!");
});
