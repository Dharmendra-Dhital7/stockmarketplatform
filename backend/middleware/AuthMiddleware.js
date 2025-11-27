// middleware/authMiddleware.js
require("dotenv").config();
const jwt = require("jsonwebtoken");

// Read token from cookie or Authorization header
function getTokenFromRequest(req) {
    // 1) Try cookie first
    if (req.cookies && req.cookies.token) return req.cookies.token;

    // 2) Then Authorization header "Bearer <token>"
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
        return authHeader.split(" ")[1];
    }

    return null;
}

module.exports = async function authMiddleware(req, res, next) {
    try {
        const token = getTokenFromRequest(req);
        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        // verify token
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // attach user id to request for downstream handlers
        req.user = { id: payload.id };

        next();
    } catch (err) {
        console.error("Auth middleware error:", err.message || err);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};
