const User = require("../model/UserModel");
const { createSecretToken } = require("../util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
    try {
        const { email, password, username } = req.body;

        // DEBUG
        console.log("SIGNUP BODY:", req.body);

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const user = await User.create({
            email,
            password: hashedPassword,
            username,
            createdAt: Date.now(),
        });

        // Create token
        const token = createSecretToken(user._id);

        // Set cookie
        res.cookie("token", token, {
            httpOnly: false,
            secure: false, // true only if using https
            sameSite: "lax", // "none" only when https
            path: "/",
        });

        // Send response
        res.status(201).json({
            message: "User signed up successfully",
            success: true,
            user,
        });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



module.exports.Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // FIND USER
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }

        console.log("USER FROM DB:", user.password);
        console.log("ENTERED PASSWORD:", password);

        // COMPARE PASSWORD
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        console.log("PASSWORD MATCH:", isPasswordMatch);

        if (!isPasswordMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // CREATE TOKEN
        const token = createSecretToken(user._id);

        res.cookie("token", token, {
            httpOnly: false,
            secure: false,
            sameSite: "lax",
        });

        res.status(200).json({ message: "Login successful", success: true, user });
    } catch (error) {
        console.log("Login Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};


//LogOut:
module.exports.Logout = async (req, res) => {
    try {
        res.cookie("token", "", {
            httpOnly: false,
            expires: new Date(0), // delete the cookie by expiring it
            sameSite: "lax",
        });

        res.status(200).json({
            message: "Logout successful",
            success: true
        });

    } catch (error) {
        console.log("Logout Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};



