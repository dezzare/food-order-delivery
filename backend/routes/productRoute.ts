import express, { Request, Response } from 'express';
import ProductController from '../controllers/productController';

const router = express.Router();

router.get("/", async (_req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.getProducts();
  return res.send(response);
});

router.post("/", async (req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.createProduct(req.body);
  return res.send(response);
});

router.get("/:id", async (req: Request, res: Response) => {
  const controller = new ProductController();
  const response = await controller.getProduct(req.params.id);
  if (!response) {
    res.status(400).send({ message: "Produto não encontrado" })
  }
  return res.send(response);
});

export default router;
