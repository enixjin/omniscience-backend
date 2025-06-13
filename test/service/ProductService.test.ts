import { ProductService } from '../../src/service/ProductService';
import { AppDataSource } from '../../src/data-source';
import { Product } from '../../src/entity/Product';

jest.mock('../../src/data-source', () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(() => {
    productService = new ProductService();
  });

  it('should be defined', () => {
    expect(productService).toBeDefined();
  });

  it('should get product by ID', async () => {
    const mockProduct: Product = { productId: 1, productName: 'Sample Product', category: 'Electronics', subCategory: 'Laptops', price: 999.99, imageUrl: 'https://example.com/product.jpg', description: 'A high-quality laptop' };

    (AppDataSource.getRepository(Product).find as jest.Mock).mockResolvedValue([mockProduct]);

    const result = await productService.getProductByID(1);

    expect(result).toEqual([mockProduct]);
    expect(AppDataSource.getRepository(Product).find).toHaveBeenCalledWith({ where: { productId: 1 } });
  });

  it('should list all products', async () => {
    const mockProducts: Product[] = [
      { productId: 1, productName: 'Sample Product 1', category: 'Electronics', subCategory: 'Laptops', price: 999.99, imageUrl: 'https://example.com/product1.jpg', description: 'A high-quality laptop' },
      { productId: 2, productName: 'Sample Product 2', category: 'Electronics', subCategory: 'Smartphones', price: 499.99, imageUrl: 'https://example.com/product2.jpg', description: 'A high-quality smartphone' },
    ];

    (AppDataSource.getRepository(Product).find as jest.Mock).mockResolvedValue(mockProducts);

    const result = await productService.list();

    expect(result).toEqual(mockProducts);
    expect(AppDataSource.getRepository(Product).find).toHaveBeenCalled();
  });
});