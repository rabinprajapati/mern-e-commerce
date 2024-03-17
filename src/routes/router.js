const express = require("express");

const app = express();

const authRouter = require("../modules/auth/auth.router");
app.use("/auth", authRouter);
const userRouter = require("../modules/user/user.router");
app.use("/user", userRouter);
const brandRouter = require("../modules/brand/brand.router");
app.use("/brand", brandRouter);

module.exports = app;
