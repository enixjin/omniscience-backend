import * as express from "express";
import { ProductService } from '../service/ProductService';
import { Product } from "../entity/Product";

const router = express.Router();
const productService = new ProductService();

// Get product list
router.get('/', async (req, res) => {
  try {
    const products = await productService.list();
    if (!products) {
      res.status(404).json({ message: 'products not found' });
    } else {
      if (req.query.gender) {
        res.json(products.filter((product: Product) => product.gender === req.query.gender));
      } else {
        res.json(products ? products : []);
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get product by ID
router.get('/', async (req, res) => {
  try {
    const idParam = req.query.id;
    if (typeof idParam !== 'string') {
      return res.status(400).json({ message: 'Invalid ID' });
    }
    const productId = parseInt(idParam);
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