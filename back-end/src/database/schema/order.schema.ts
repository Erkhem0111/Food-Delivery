import { model, Schema } from "mongoose";

const orderSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        foodId: { type: Schema.Types.ObjectId, ref: "Food", required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    status: { type: String, required: true, default: "pending" },
  },
  {
    timestamps: true,
  }
);
export const OrderSchema = model("Order", orderSchema);
