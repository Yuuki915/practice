const cors = require("cors");
const express = require("express");
const { DEC8_BIN } = require("mysql/lib/protocol/constants/charsets");

// mongoose
// const User = require("./models/user");

const app = express();
const PORT = 5001;

// middleware
app.use(cors());

// route
app.get("/", (req, res) => {
  console.log("hello");

  // mongoose / mongodb
  //   const user = User.findOne({ id: 10 });
  //   res.json({ user: user });

  res.json({ name: "Konchiwa 1", date: "2020-08-21" });
});

app.get("/login", (req, res) => {
  //email address and password

  console.log("hello");

  // mongoose / mongodb
  //   const user = User.findOne({ id: 10 });
  //   res.json({ user: user });

  res.json({ server: "healthly" });
});

app.listen(PORT, () => console.log("hi"));

//localhost:3000/
