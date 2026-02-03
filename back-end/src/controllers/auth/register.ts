import type { RequestHandler } from "express";
import { UserModel } from "../../database/schema/user.schema.ts";

export const register: RequestHandler = async (req, res) => {
  const { password, email } = req.body;
  if (await UserModel.findOne({ email }))
    return res.status(400).json({ message: "Email already exists" });

  const user = await UserModel.create({
    password,
    email,
  });

  res.status(200).json({ user });
};
