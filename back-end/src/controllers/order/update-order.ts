import type { RequestHandler } from "express";
import { OrderModel } from "../../database/schema/order.schema.ts";

export const updateOrder: RequestHandler = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const body = req.body;

    const updateOrder = await OrderModel.findByIdAndUpdate(
      orderId,
      { $set: body },
      { new: true, runValidators: true },
    );

    if (!updateOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updateOrder);
  } catch (err) {
    res.status(400).json({ message: "Update failed", error: err });
  }
};
