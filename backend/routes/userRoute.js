

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