import { model, Schema } from "mongoose";

const foodSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    image: { type: String, required: false },
    ingredients: { type: String, required: false },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const FoodModel = model("Food", foodSchema);
