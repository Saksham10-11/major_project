import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// backend/routes/userRoutes.js

router.post("/save", async (req, res) => {
  const { username, email, token } = req.body;

  // LOG 1: Check what the frontend is sending
  console.log(">>> [BACKEND] Received /save request for email:", email);
  console.log(">>> [BACKEND] Payload details:", { username, token });

  try {
    let user = await User.findOne({ email });

    if (!user) {
      // LOG 2: Confirm if a new user is being created
      console.log(">>> [BACKEND] User does not exist. Creating new user in MongoDB...");
      user = new User({
        username,
        email,
        token,
      });
      await user.save();
      console.log(">>> [BACKEND] Successfully saved new user:", email);
    } else {
      // LOG 3: Confirm if the user was found
      console.log(">>> [BACKEND] User already exists in DB:", email);
    }

    res.status(200).json(user);
  } catch (error) {
    // LOG 4: Catch the specific database or server error
    console.error(">>> [BACKEND] Error in /save route:", error.message);
    res.status(500).json({ message: "Server error", details: error.message });
  }
});

export default router;
