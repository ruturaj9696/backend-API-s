// admin.controller.js

import Admin from "../models/admin.model.js";



export const createAdmin = async (req, res) => {
    try {
        const { username, mobile, email, password, avatar } = req.body;
        
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        // Create a new admin
        const newAdmin = new Admin({ username, mobile, email, password, avatar });
        await newAdmin.save();

        res.status(201).json({ message: "Admin created successfully", admin: newAdmin });
    } catch (error) {
        console.error("Error creating admin:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
