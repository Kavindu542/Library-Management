const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();

// Use environment variable or fallback to a default secret
const JWT_SECRET = process.env.JWT_SECRET || "library_management_system_secret_key_2024";

// Register a new user
router.post("/register", async (req, res) => {
  const { name, email, password, dob, phone, isAdmin } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({ name, email, dob, phone, isAdmin });
    user.setPassword(password);
    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// Login User
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (!user.isValidPassword(password)) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ 
      id: user._id, 
      email: user.email,
      isAdmin: user.isAdmin 
    }, JWT_SECRET, { expiresIn: "1d" });

    res.json({ 
      token, 
      user: { 
        _id: user._id,
        name: user.name, 
        email: user.email, 
        dob: user.dob, 
        phone: user.phone, 
        isAdmin: user.isAdmin 
      } 
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login", error: error.message });
  }
});

// Logout User
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Error during logout", error: err });
    }
    res.status(200).json({ message: "Successfully logged out" });
  });
});

module.exports = router;


