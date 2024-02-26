// User.controller.js

import User from "../models/user.model.js";

export const createUser = async (req, res) => {
  try {
    const { username, mobile, email, password, plant_name, avatar } = req.body;

    // Check if the User already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new User
    const newUser = new User({
      username,
      mobile,
      email,
      plant_name,
      password,
      avatar,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User created successfully", User: newUser });
  } catch (error) {
    console.error("Error creating User:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
