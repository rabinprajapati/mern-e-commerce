const express = require("express");
const app = express();

const router = require("../routes/router");
// const errorRoute = require("./error.config");

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//route
app.use("/api/v1", router);

// app.use(errorRoute);

router.use((req, res, next) => {
  next({ code: 404, message: "ROute not found" });
});

//error handler
app.use((error, req, res, next) => {
  console.log("error sectionnnnnn");
  const code = error.code ?? 500;
  const message = error.message ?? "Server Error";
  res.status(code).json({ message: message, meta: null });
});
module.exports = app;
