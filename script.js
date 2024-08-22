// express js
// framework - flow
// manages everything from receiving the req and manages res

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
  console.log("Middleware occurred");
  next();
});

app.use(function (req, res, next) {
  console.log("Middleware occurred two times");
  next();
});

app.get("/", function (req, res) {
  res.send("Hello Worlds ya");
});

app.get("/profile", function (req, res, next) {
  return next(new Error("Something Went Wrong"));
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send("Error Occurred");
});

app.listen(3000);
