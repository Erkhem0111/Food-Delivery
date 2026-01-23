import type { RequestHandler } from "express";
import Jwt from "jsonwebtoken";
import type { UserModel } from "../../database/schema/user.schema.ts";

export const getMe: RequestHandler = async (req, res) => {
  const authorization = req.headers.authorization;
  if (!authorization) return res.status(401).json({ message: "Unauthorized" });
  const token = authorization.split(" ")[1] as string;
  try {
    const { user } = Jwt.verify(token, "Secret") as {
      user: Omit<typeof UserModel, "password">;
    };
    res.status(200).json({ user });
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
};
