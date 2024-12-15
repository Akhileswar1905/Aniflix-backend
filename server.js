const express = require("express");
const cors = require("cors");
const dbConnection = require("./db/db");
const userRouter = require("./routes/UserRoute");

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5000, () => {
  dbConnection;
  console.log("Server is running on port 5000");
});
