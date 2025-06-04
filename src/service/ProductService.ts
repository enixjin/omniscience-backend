import { Product } from '../entity/Product';
import { AppDataSource } from '../data-source';

export class ProductService {
  private ProductRepository = AppDataSource.getRepository(Product);

  async getProductByID(id: number): Promise<Product[] | []> {
    return this.ProductRepository.find({ where: { productId: id } });
  }

  async list(): Promise<Product[] | []> {
    return this.ProductRepository.find();
  }

}