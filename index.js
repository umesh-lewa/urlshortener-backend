const express = require("express");
const bodyParser = require("body-parser");
const user = require("./routes/user");
const shorten = require("./routes/shorten");
const resetpassword = require("./routes/resetpassword");
const InitiateMongoServer = require("./config/db");

InitiateMongoServer();

const app = express();

const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});

app.use("/user", user);
app.use("/password", resetpassword);
app.use("/",shorten);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});
