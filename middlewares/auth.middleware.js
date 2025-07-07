import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.models.js";
const authorize = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer ")) {
      const token = authHeader.split(" ")[1];
      if (!token) {
        return res.status(401).json({ message: "Unauthorized access, token not provided" });
      }

      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (!user) {
        return res.status(401).json({ message: "Unauthorized access, user not found" });
      }

      req.user = user;
      return next();
    }
    return res.status(401).json({ message: "Unauthorized access, authorization header not found" });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized access", error: error.message });
  }
};

export default authorize;
