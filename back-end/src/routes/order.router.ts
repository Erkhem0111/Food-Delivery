import { Router } from "express";
import { authMiddleware } from "../middlewares/authmiddleware.ts";
import { getUserOrders } from "../controllers/order/get-user-orders.ts";
import { createOrder } from "../controllers/order/create-order.ts";

const OrderRouter = Router();

OrderRouter.get("/", authMiddleware, getUserOrders).post(
  "/create",
  createOrder,
);

export { OrderRouter };
