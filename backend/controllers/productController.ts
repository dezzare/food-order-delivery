import { Product } from "../models";
import {
  getProducts,
  createProduct,
  IProduct,
  getProduct
} from '../repositories/ProductRepository'

export default class ProductController {
  public async getProducts(): Promise<Array<Product>> {
    return getProducts();
  }

  public async createProduct(body: IProduct): Promise<Product> {
    return createProduct(body);
  }

  public async getProduct(id: string): Promise<Product | null> {
    return getProduct(String(id));
  }
}
