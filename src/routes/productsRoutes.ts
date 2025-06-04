import * as express from "express";
import { ProductService } from '../service/ProductService';

const router = express.Router();
const productService = new ProductService();

// Get customers by phone
router.get('/', async (req, res) => {
  try {
    const products = await productService.list();
    if (!products) {
      res.status(404).json({ message: 'products not found' });
    } else {
      res.json(products ? products : []);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get product by ID
router.get('/', async (req, res) => {
  try {
    const productId = parseInt(req.query.id);
    const product = await productService.getProductByID(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'products not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;