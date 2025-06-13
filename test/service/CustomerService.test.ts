import { CustomerService } from '../../src/service/CustomerService';
import { AppDataSource } from '../../src/data-source';
import { Customer } from '../../src/entity/Customer';

jest.mock('../../src/data-source', () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
      findOne: jest.fn(),
      create: jest.fn(),
      save: jest.fn(),
      merge: jest.fn(),
      delete: jest.fn(),
    }),
  },
}));

describe('CustomerService', () => {
  let customerService: CustomerService;

  beforeEach(() => {
    customerService = new CustomerService();
  });

  it('should be defined', () => {
    expect(customerService).toBeDefined();
  });

  it('should get all customers', async () => {
    const mockCustomers: Customer[] = [
      { customerId: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890', address: '123 Main St', gender: 'Male', title: 'Mr.' },
      { customerId: 2, name: 'Jane Doe', email: 'jane.doe@example.com', phone: '+0987654321', address: '456 Elm St', gender: 'Female', title: 'Mrs.' },
    ];

    (AppDataSource.getRepository(Customer).find as jest.Mock).mockResolvedValue(mockCustomers);

    const result = await customerService.getAllCustomers();

    expect(result).toEqual(mockCustomers);
    expect(AppDataSource.getRepository(Customer).find).toHaveBeenCalled();
  });

  it('should get customer by ID', async () => {
    const mockCustomer: Customer = { customerId: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890', address: '123 Main St', gender: 'Male', title: 'Mr.' };

    (AppDataSource.getRepository(Customer).findOne as jest.Mock).mockResolvedValue(mockCustomer);

    const result = await customerService.getCustomerById(1);

    expect(result).toEqual(mockCustomer);
    expect(AppDataSource.getRepository(Customer).findOne).toHaveBeenCalledWith({ where: { customerId: 1 } });
  });

  it('should get customer by phone', async () => {
    const mockCustomer: Customer = { customerId: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890', address: '123 Main St', gender: 'Male', title: 'Mr.' };

    (AppDataSource.getRepository(Customer).findOne as jest.Mock).mockResolvedValue(mockCustomer);

    const result = await customerService.getCustomerByPhone('+1234567890');

    expect(result).toEqual(mockCustomer);
    expect(AppDataSource.getRepository(Customer).findOne).toHaveBeenCalledWith({ where: { phone: '+1234567890' } });
  });

  it('should create a customer', async () => {
    const mockCustomer: Customer = { customerId: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890', address: '123 Main St', gender: 'Male', title: 'Mr.' };

    (AppDataSource.getRepository(Customer).create as jest.Mock).mockReturnValue(mockCustomer);
    (AppDataSource.getRepository(Customer).save as jest.Mock).mockResolvedValue(mockCustomer);

    const result = await customerService.createCustomer(mockCustomer);

    expect(result).toEqual(mockCustomer);
    expect(AppDataSource.getRepository(Customer).create).toHaveBeenCalledWith(mockCustomer);
    expect(AppDataSource.getRepository(Customer).save).toHaveBeenCalledWith(mockCustomer);
  });

  it('should update a customer', async () => {
    const mockCustomer: Customer = { customerId: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1234567890', address: '123 Main St', gender: 'Male', title: 'Mr.' };
    const updatedData = { name: 'John Smith' };

    (AppDataSource.getRepository(Customer).findOne as jest.Mock).mockResolvedValue(mockCustomer);
    (AppDataSource.getRepository(Customer).merge as jest.Mock).mockReturnValue({ ...mockCustomer, ...updatedData });
    (AppDataSource.getRepository(Customer).save as jest.Mock).mockResolvedValue({ ...mockCustomer, ...updatedData });

    const result = await customerService.updateCustomer(1, updatedData);

    expect(result).toEqual({ ...mockCustomer, ...updatedData });
    expect(AppDataSource.getRepository(Customer).findOne).toHaveBeenCalledWith({ where: { customerId: 1 } });
    expect(AppDataSource.getRepository(Customer).merge).toHaveBeenCalledWith(mockCustomer, updatedData);
    expect(AppDataSource.getRepository(Customer).save).toHaveBeenCalledWith({ ...mockCustomer, ...updatedData });
  });

  it('should delete a customer', async () => {
    (AppDataSource.getRepository(Customer).delete as jest.Mock).mockResolvedValue({ affected: 1 });

    const result = await customerService.deleteCustomer(1);

    expect(result).toBe(true);
    expect(AppDataSource.getRepository(Customer).delete).toHaveBeenCalledWith({ customerId: 1 });
  });
});