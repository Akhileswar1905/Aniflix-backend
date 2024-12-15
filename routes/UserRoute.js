const express = require("express");
const { SignUp } = require("../controls/UserControls");

const userRouter = express.Router();

userRouter.post("/register", SignUp);

module.exports = userRouter;
