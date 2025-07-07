import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";
import User from "../models/user.models.js";
const authorize = async (req, res, next) => {
  try {
    if (
      res.headers.authorization &&
      res.headers.authorization.startsWith("Bearer")
    ) {
      const token = res.headers.authorization.split(" ")[1];
      if (!token) {
        return res
          .status(401)
          .json({ message: "Unauthorized access, token not provided" });
      }
      // Verify the token (assuming you have a function to verify JWT)
      const decoded = jwt.verify(token, JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (!user)
        return res
          .status(401)
          .json({ message: "Unauthorized access, user not found" });

      req.user = user;
      next(); // Proceed to the next middleware or route handler
    }
  } catch (error) {
    res
      .status(401)
      .json({ message: "Unauthorized access", error: error.message });
  }
};

export default authorize;
