import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // address: { type: String, required: false },
    role: { type: String, required: true, default: "customer" },
  },
  {
    timestamps: true,
  },
);
export const UserModel = model("User", userSchema);
