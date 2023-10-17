import express from 'express';
import { Card, User, Sequelize } from '../../db/models';

const card = express.Router();

card.get('/', (req, res) => {
  res.json({ hello: 'world' });
});

card.delete('/del/:id', async (req, res) => {
  const { id } = req.params;
  if (!id) {
    res.sendStatus(402);
    return;
  }
  await Card.destroy({
    where: {
      id,
    },
  });

  res.sendStatus(200);
});

card.post('/add', async (req, res) => {
  console.log(req.body);
  const {
    img, header, discription,
  } = req.body;
  const data = await Card.create({
    img,
    header,
    discription,
    user_id: req.session.user.id,
  });
  res.json(data);
});

card.put('/edit/:id', async (req, res) => {
  const data = req.body;
  await Card.update(data, { where: { id: req.params.id } });
  res.send(data);
});

card.post('/routes/search', async (req, res) => {
  const { input } = req.body;
  try {
    const routes = await Card.findAll({
      where: {
        name: {
          [Sequelize.Op.iLike]: `%${input}%`,
        },
      },
      include: {
        model: User,
        attributes: ['id', 'name'],
      },
    });
    res.send(routes);
  } catch (err) {
    console.log(err);
  }
});

card.get('/routes', async (req, res) => {
  const routes = await Card.findAll({
    include: {
      model: User,
      attributes: ['id', 'name'],
    },
  });
  res.send(routes);
});

export default card;
