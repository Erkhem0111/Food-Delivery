import type { RequestHandler } from "express";
import Jwt from "jsonwebtoken";

export const authMiddleware: RequestHandler = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });

  const token = authorization.split(" ")[1] as string;

  try {
    const { user } = Jwt.verify(token, "Secret") as {
      user: { _id: string };
    };
    req.userId = user._id;
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
