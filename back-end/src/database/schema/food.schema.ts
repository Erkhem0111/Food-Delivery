import { model, Schema } from "mongoose";

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: false },
    description: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);
export const FoodModel = model("Food", foodSchema);
