import { Order } from '../../src/entity/Order';

describe('Order Entity', () => {
  it('should create an instance of Order', () => {
    const order = new Order();
    expect(order).toBeInstanceOf(Order);
  });

  it('should set and get properties correctly', () => {
    const order = new Order();
    order.orderId = 1;
    order.customerId = 101;
    order.orderDate = new Date('2023-01-01');
    order.totalAmount = 100.50;
    order.status = 'Pending';

    expect(order.orderId).toBe(1);
    expect(order.customerId).toBe(101);
    expect(order.orderDate).toEqual(new Date('2023-01-01'));
    expect(order.totalAmount).toBe(100.50);
    expect(order.status).toBe('Pending');
  });
});