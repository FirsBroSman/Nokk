import React, { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import CardList from '../UI/CardList';

export default function HomePage({ user, allCards }) {
  const [cards, setCard] = React.useState(allCards);
  console.log(cards);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/del/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setCard((prev) => prev.filter((el) => el.id !== id));
    }
  };

  const [input, setInput] = React.useState('');
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    if (input.trim()) {
      const time = setTimeout(() => {
        axios.post('/api/routes/search', { input }).then((res) => setCard(res.data));
      }, 300);
      return () => {
        clearTimeout(time);
      };
    }
    if (!input) {
      axios.get('/api/routes').then((res) => setCard(res.data));
    }
  }, [input]);

  return (
    <div className="container">
      <br />
      <br />
      <Form.Control
        value={input}
        onChange={changeHandler}
        name="name"
        type="text"
        placeholder="filter"
        style={{ width: '275px' }}
      />
      <br />
      <Button variant="warning" type="submit">
        SEARCH
      </Button>
      <div className="row mt-5" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {cards.map((card) => (
          <CardList key={card.id} card={card} user={user} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  );
}
