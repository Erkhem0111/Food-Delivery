import type { RequestHandler } from "express";
import { CategoryModel } from "../../database/schema/category.schema.js";

export const getCategories: RequestHandler = async (_req, res) => {
  const categories = await CategoryModel.find({}).populate("name");

  res.status(200).json(categories);
};
