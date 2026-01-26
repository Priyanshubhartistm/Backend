const express = require("express");
const app = express();
const port = 3000;

// loading middleware into the application
//  inbuilt middleware
app.use(express.json());
//
// express.json();

// middleware - logging, validation, authentication

// creating a middleware
const loggingMiddleware = (req, res, next) => {
  console.log("LOGING Krra hu");
  next();
};
// loading middleware into the application
app.use(loggingMiddleware);

const validateMiddleware = (req, res, next) => {
  console.log("Validating krra hu");
  next();
};
app.use(validateMiddleware);

const authMiddleware = (req, res, next) => {
  console.log("Authenticating krra hu");
  res.send("chlo sidha ghar");
//   next();
};
app.use(authMiddleware);

app.get("/", (req, res) => {
  console.log("main route handler hu");

  console.log("req.body");
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
