import { Product } from '../../src/entity/Product';

describe('Product Entity', () => {
  it('should create an instance of Product', () => {
    const product = new Product();
    expect(product).toBeInstanceOf(Product);
  });

  it('should set and get properties correctly', () => {
    const product = new Product();
    product.productId = 1;
    product.productName = 'Sample Product';
    product.category = 'Electronics';
    product.subCategory = 'Laptops';
    product.price = 999.99;
    product.imageUrl = 'https://example.com/product.jpg';
    product.description = 'A high-quality laptop';

    expect(product.productId).toBe(1);
    expect(product.productName).toBe('Sample Product');
    expect(product.category).toBe('Electronics');
    expect(product.subCategory).toBe('Laptops');
    expect(product.price).toBe(999.99);
    expect(product.imageUrl).toBe('https://example.com/product.jpg');
    expect(product.description).toBe('A high-quality laptop');
  });
});