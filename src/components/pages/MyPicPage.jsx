import React from 'react';
import Button from 'react-bootstrap/Button';
import CardList from '../UI/CardList';

export default function MyPicPage({ allUserCards, user }) {
  console.log(allUserCards);

  const [cards, setCard] = React.useState(allUserCards);

  const deleteHandler = async (id) => {
    const response = await fetch(`/api/del/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setCard((prev) => prev.filter((el) => el.id !== id));
    }
  };
  // const [cards, setCard] = React.useState(allUserCards);
  // console.log(cards);

  // const deleteHandler = async (id) => {
  //   const response = await fetch(`/api/del/${id}`, {
  //     method: 'DELETE',
  //   });
  //   if (response.ok) {
  //     setCard((prev) => prev.filter((el) => el.id !== id));
  //   }
  // };
  return (
    <div className="container">
      <br />

      <div className="row mt-5" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {cards.map((card) => (
          <CardList key={card.id} card={card} user={user} deleteHandler={deleteHandler} />
        ))}
      </div>
    </div>
  );
}
