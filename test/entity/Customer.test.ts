import { Customer } from '../../src/entity/Customer';

describe('Customer Entity', () => {
  it('should create an instance of Customer', () => {
    const customer = new Customer();
    expect(customer).toBeInstanceOf(Customer);
  });

  it('should set and get properties correctly', () => {
    const customer = new Customer();
    customer.customerId = 1;
    customer.name = 'John Doe';
    customer.email = 'john.doe@example.com';
    customer.phone = '+1234567890';
    customer.address = '123 Main St, City';
    customer.gender = 'Male';
    customer.title = 'Mr.';

    expect(customer.customerId).toBe(1);
    expect(customer.name).toBe('John Doe');
    expect(customer.email).toBe('john.doe@example.com');
    expect(customer.phone).toBe('+1234567890');
    expect(customer.address).toBe('123 Main St, City');
    expect(customer.gender).toBe('Male');
    expect(customer.title).toBe('Mr.');
  });
});