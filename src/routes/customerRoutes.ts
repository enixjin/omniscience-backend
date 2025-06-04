import * as express from "express";
import { CustomerService } from '../service/CustomerService';
import { OrderService } from '../service/OrderService';
import { ChatService } from "../service/ChatService";

const router = express.Router();
const customerService = new CustomerService();
const orderService = new OrderService();
const chatService = new ChatService();

// Get customers by phone
router.get('/', async (req, res) => {
  try {
    const customer = await customerService.getCustomerByPhone(req.query.phone as string);
    if (!customer) {
      res.status(404).json({ message: 'Customer not found' });
    } else {
      res.json(customer ? customer : []);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get customer by ID
router.get('/orders', async (req, res) => {
  try {
    const customerId = parseInt(req.query.id);
    const orders = await orderService.getOrderByCustomerID(customerId);
    if (orders) {
      res.json(orders);
    } else {
      res.status(404).json({ message: 'orders not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/chats', async (req, res) => {
  try {
    const customerId = parseInt(req.query.id);
    const chats = await chatService.getChatByCustomerID(customerId);
    if (chats) {
      res.json(chats);
    } else {
      res.status(404).json({ message: 'chats not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;