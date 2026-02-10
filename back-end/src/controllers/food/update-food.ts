import type { RequestHandler } from "express";
import { FoodModel } from "../../database/schema/food.schema.ts";

export const updateFood: RequestHandler = async (req, res) => {
  try {
    const foodId = req.params.foodId;
    const body = req.body;

    const updateFood = await FoodModel.findByIdAndUpdate(
      foodId,
      { $set: body },
      { new: true, runValidators: true },
    );

    if (!updateFood) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(updateFood);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err });
  }
};
