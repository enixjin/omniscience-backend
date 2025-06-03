import * as express from "express";
import { CustomerService } from '../service/CustomerService';

const router = express.Router();
const customerService = new CustomerService();

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
router.get('/:id', async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    const customer = await customerService.getCustomerById(customerId);
    if (customer) {
      res.json(customer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Create a new customer
router.post('/', async (req, res) => {
  try {
    const customerData = req.body;
    const newCustomer = await customerService.createCustomer(customerData);
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(400).json({ message: 'Invalid input data' });
  }
});

// Update customer by ID
router.put('/:id', async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    const updatedData = req.body;
    const updatedCustomer = await customerService.updateCustomer(customerId, updatedData);
    if (updatedCustomer) {
      res.json(updatedCustomer);
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Invalid input data' });
  }
});

// Delete customer by ID
router.delete('/:id', async (req, res) => {
  try {
    const customerId = parseInt(req.params.id);
    const result = await customerService.deleteCustomer(customerId);
    if (result) {
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Customer not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;