const express = require('express');
const router = express.Router();
const pool = require('../db');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
verifyToken = require('../middlewares/authMiddleware');
router.post('/user', async (req, res) => {
    try {
        const { username, email, age, gender, profession, password } = req.body;

        if (!username || !email || !age || !gender || !profession || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        const newUser = await pool.query(
            "INSERT INTO users (username, email, age, gender, profession, password) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [username, email, age, gender, profession, hashedPassword]
        );

        const token = jwt.sign({ user: newUser.rows[0].id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

       

        res.status(201).json({ message: "User created successfully", token, data: newUser.rows[0] });

    } catch (err) {
        console.error("Error inserting user:", err);
        res.status(500).json({ error: "Failed to create user" });
    }
});


router.post("/check", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
        if (user.rows.length === 0) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.rows[0].password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        
        const token = jwt.sign(
            { userId: user.rows[0].id }, 
            process.env.JWT_SECRET, 
            { expiresIn: process.env.JWT_EXPIRES_IN }
        );

        res.status(200).json({ success: true, message: "Login successful", token });

    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
});


router.get("/profile", verifyToken, async (req, res) => {
    
    try {
        const userId = req.user.userId; 
        console.log(userId)
        const user = await pool.query(
            "SELECT username AS name, email, age, gender, profession FROM users WHERE id = $1",
            [userId]
        );

        if (user.rows.length === 0) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.rows[0]);

    } catch (error) {
        console.error("Error fetching profile:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



module.exports = router;
