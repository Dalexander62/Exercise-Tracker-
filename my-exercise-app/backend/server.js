const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

// require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://Dalex:mongoDB@cluster0.m3ijd.mongodb.net/test",
  { useNewUrlParser: true },
  (error) => {
    if (error) {
      console.log("Can't connect");
    } else if (!error) {
      console.log("Connected");
    }
  }
);

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

const server = app.listen(5015, () => {
  console.log(`Server is running on port: ${5015}`);
});
