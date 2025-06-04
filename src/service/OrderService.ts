import { Order } from '../entity/Order';
import { AppDataSource } from '../data-source';

export class OrderService {
  private OrderRepository = AppDataSource.getRepository(Order);

  async getOrderByCustomerID(id: number): Promise<Order[] | []> {
    return this.OrderRepository.find({ where: { customerId: id } });
  }

}