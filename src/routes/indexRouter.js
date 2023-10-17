import express from 'express';
import { Card } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allCards = await Card.findAll();
  res.render('Layout', { allCards });
});

export default router;
