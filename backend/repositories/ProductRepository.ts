import { Product } from "../models";
import { dataSource } from "..";
import { FindOneOptions } from "typeorm";

export interface IProduct {
  name: string;
  details: string;
  price: number;
}


export const getProducts = async (): Promise<Array<Product>> => {
  const productRepository = dataSource.getRepository(Product)
  return productRepository.find();
}

export const createProduct = async (payload: IProduct): Promise<Product> => {
  const productRepository = dataSource.getRepository(Product);
  const product = new Product();
  return productRepository.save({
    ...product,
    ...payload,
  });
};

export const getProduct = async (id: string): Promise<Product | null> => {
  const searchId = { where: { id, } } as FindOneOptions<Product>
  const productRepository = dataSource.getRepository(Product);
  const product = productRepository.findOne(searchId)
  if (!product) return null;
  return product;
}
