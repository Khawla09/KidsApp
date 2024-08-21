require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./models/userSchema");
const SECRET_KEY = "secretkey";
const connectDB = require("./db/connectDb")
const productRouter = require("./routes/productRoute")
const data = require("./db/products");
const Product = require("./models/productSchema")

//connect to express

const app = express();
app.use(express.static('public'));


// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
// app.use('/images', express.static('public/images'));


//middleware
app.use((req,res,next)=>{
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
  next()
})
//connect to mongoDB
connectDB()


//Routes CRUD
app.get("/home",(req,res)=>{
  res.json({msg:"heello"})
})
//seed 

app.use("/api/products", productRouter);

// app.use("/api/products", categoryRouter)
app.get('/api/seed', async (req, res) => {
  try {
    await Product.deleteMany({})
      const createProd = await Product.insertMany(data)
      res.send({createProd})
   
  } catch (error) {
    res.status(500).send(error);
  }
});


//Create User Registration(POST)
// app.post("/register", async (req, res) => {
//   try {
//     const { email, username, password } = req.body;
//     // bcrypt => password(hide it) 10 is how hard gonna be to decrypt it
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const newUser = new User({ email, username, password: hashedPassword });
//     await newUser.save();
//     res.status(201).json({ message: "User created successfully" });
//   } catch (error) {
//     res.status(500).json({ error: "Error signing up" });
//   }
// });
// //Get Register
// app.get("/register", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(201).json(users);
//   } catch (error) {
//     res.status(500).json({ error: "Unable to get users!" });
//   }
// });
// //Get Login
// app.post("/login", async (req, res) => {
//   try {
//     const { username, password } = req.body;
//     const user = await User.findOne({ username });
//     if (!user) {
//       return res.status(401).json({ error: "invalid credentials" });
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     if (!isPasswordValid) {
//       return res.status(401).json({ error: "invalid credentials" });
//     }
//     const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
//       expiresIn: "1hr",
//     });
//     res.json({ message: "Login successful" });
//   } catch (error) {
//     res.status(500).json({ error: "Error logging in" });
//   }
// });
//////////////

//

//insert data

  //listen port
app.listen(PORT, console.log('connected to port '+PORT)
      );