const cors = require("cors");
const express = require("express");

// mongoose
// const User = require("./models/user");

const app = express();
const PORT = 8000;

// middleware
app.use(cors());

// route
app.get("/", (req, res) => {
  console.log("hello");

  // mongoose / mongodb
  //   const user = User.findOne({ id: 10 });
  //   res.json({ user: user });

  res.json({ name: "Konchiwa", date: "2020-08-21" });
});

app.listen(PORT, () => console.log("hi"));
