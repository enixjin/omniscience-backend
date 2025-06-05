import * as express from "express";
import { CustomerTagDefinitionService } from '../service/TagService';

const router = express.Router();
const tagService = new CustomerTagDefinitionService();

// Get customers by phone
router.get('/', async (req, res) => {
  try {
    const tags = await tagService.list();
    if (!tags) {
      res.status(404).json({ message: 'tags not found' });
    } else {
      res.json(tags ? tags : []);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;