import { createProduct } from "./repositories/ProductRepository";
import ProductController from "./controllers/productController"

export const fakeDB = async () => {

  for (let i = 0; i<5; i++){
    const controller = new ProductController();
    const body = {
      "name": `"Produto${i}"`,
      "details": `"Detalhe${i}"`,
      "price": i
    }
    const response = await controller.createProduct(body);
    console.log(response);
  }

}


