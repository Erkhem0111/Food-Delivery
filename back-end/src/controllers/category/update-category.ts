import type { RequestHandler } from "express";
import { CategoryModel } from "../../database/schema/category.schema.ts";

export const updateCategory: RequestHandler = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const body = req.body;

    const updatedCategory = await CategoryModel.findByIdAndUpdate(
      categoryId,
      { $set: body },
      { new: true, runValidators: true },
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err });
  }
};
