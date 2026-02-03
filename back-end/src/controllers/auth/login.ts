import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.ts";
import Jwt from "jsonwebtoken";

export const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) return res.status(404).json({ message: "User not found" });
  if (user.password !== password)
    return res.status(401).json({ message: "Wrong password" });

  const accessToken = Jwt.sign({ user }, "Secret");

  res.status(200).json({
    user,
    accessToken,
  });
};
