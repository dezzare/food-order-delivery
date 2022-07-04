import express, { Request, Response } from "express";
import PingController from "../controllers/ping";
import UserRoute from "./userRoute";
import ProductRoute from "./productRoute"

const router = express.Router();

router.get("/ping", async (_req: Request, res: Response) => {
  const controller = new PingController();
  const response = await controller.getMessage();
  return res.send(response);
});

router.use("/users", UserRoute);
router.use("/products", ProductRoute);

export default router
