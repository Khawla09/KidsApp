const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/userSchema");
const SECRET_KEY = "secretkey";
//connect to express
const app = express();

//connect to mongoDB
const dbURI =
  "mongodb+srv://khawla02:khawla02@cluster1.kzki3.mongodb.net/UsersDB?retryWrites=true&w=majority&appName=Cluster1";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3005, () => {
      console.log("connected successfuly to DB");
    });
  })
  .catch((error) => {
    console.log("unable to connect to DB");
  });
//middleware
app.use(bodyParser.json());
app.use(cors());

//Routes CRUD
//Create User Registration(POST)
app.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    // bcrypt => password(hide it) 10 is how hard gonna be to decrypt it
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});
//Get Register
app.get("/register", async (req, res) => {
  try {
    const users = await User.find();
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "Unable to get users!" });
  }
});
//Get Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "invalid credentials" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "invalid credentials" });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ error: "Error logging in" });
  }
});
//Read
