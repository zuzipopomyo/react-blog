const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ error: "Wrong credentials!" });
    }

    const validated = await bcrypt.compare(password, user.password);
    if (!validated) {
      return res.status(400).json({ error: "Wrong credentials!" });
    }

    // Return user details without password
    const { password: omit, ...userData } = user._doc;
    res.status(200).json(userData);
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json(err);
  }
});

module.exports = router;
