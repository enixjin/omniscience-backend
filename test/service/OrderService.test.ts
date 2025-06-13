import { OrderService } from '../../src/service/OrderService';
import { AppDataSource } from '../../src/data-source';
import { Order } from '../../src/entity/Order';

jest.mock('../../src/data-source', () => ({
  AppDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('OrderService', () => {
  let orderService: OrderService;

  beforeEach(() => {
    orderService = new OrderService();
  });

  it('should be defined', () => {
    expect(orderService).toBeDefined();
  });

  it('should get order by customer ID', async () => {
    const mockOrders: Order[] = [
      { orderId: 1, customerId: 101, orderDate: new Date('2023-01-01'), totalAmount: 100.50, status: 'Pending' },
      { orderId: 2, customerId: 101, orderDate: new Date('2023-01-02'), totalAmount: 200.75, status: 'Completed' },
    ];

    (AppDataSource.getRepository(Order).find as jest.Mock).mockResolvedValue(mockOrders);

    const result = await orderService.getOrderByCustomerID(101);

    expect(result).toEqual(mockOrders);
    expect(AppDataSource.getRepository(Order).find).toHaveBeenCalledWith({ where: { customerId: 101 } });
  });
});