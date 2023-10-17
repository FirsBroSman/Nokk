import express from 'express';
import { Card } from '../../db/models';

const router = express.Router();

router.get('/route/:id', async (req, res) => {
  const oneCard = await Card.findByPk(req.params.id);
  res.render('Layout', { oneCard });
});

router.get('/routs/add', (req, res) => {
  res.render('Layout');
});

router.get('/routs/all', async (req, res) => {
  console.log(req.session.user.id);
  const allUserCards = await Card.findAll({ where: { user_id: req.session.user.id } });
  console.log('------', allUserCards);
  res.render('Layout', { allUserCards });
});

export default router;
