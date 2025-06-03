import { Customer } from '../entity/Customer';
import { AppDataSource } from '../data-source';

export class CustomerService {
  private customerRepository = AppDataSource.getRepository(Customer);

  async getAllCustomers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async getCustomerById(id: number): Promise<Customer | null> {
    return this.customerRepository.findOne({ where: { customerId: id } });
  }

  async getCustomerByPhone(phone: string): Promise<Customer | null> {
    return this.customerRepository.findOne({ where: { phone } });
  }

  async createCustomer(customerData: Partial<Customer>): Promise<Customer> {
    const customer = this.customerRepository.create(customerData);
    return this.customerRepository.save(customer);
  }

  async updateCustomer(id: number, updatedData: Partial<Customer>): Promise<Customer | null> {
    const customer = await this.customerRepository.findOne({ where: { customerId: id } });
    if (customer) {
      this.customerRepository.merge(customer, updatedData);
      return this.customerRepository.save(customer);
    }
    return null;
  }

  async deleteCustomer(id: number): Promise<boolean> {
    const result = await this.customerRepository.delete({ customerId: id });
    return result.affected > 0;
  }
}