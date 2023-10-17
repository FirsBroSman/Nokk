// CardList.jsx
import React, { useState } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';
import EditCard from './EditCard';

export default function CardList({ user, card, deleteHandler }) {
  const [editMode, setEditMode] = useState(false);
  const [editedCard, setEditedCard] = useState(null);
  const [cardData, setCardData] = useState(card);

  const handleEdit = (card) => {
    setEditedCard(card);
    setEditMode(true);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditedCard(null);
  };

  const submitHandler = async (formData) => {
    const response = await axios.put(`/api/edit/${editedCard.id}`, formData);
    setCardData(response.data); // Обновляем данные карточки
    setEditedCard(null);
    setEditMode(false);
  };

  return (
    <Card style={{ width: '20rem' }}>
      {editedCard ? (
        <EditCard
          oneCard={editedCard}
          submitHandler={submitHandler}
          onCancelEdit={handleCancelEdit}
        />
      ) : (
        <>
          <Card.Img variant="top" src={cardData.img} style={{ width: 'auto', height: 'auto' }} />
          <Card.Body>
            <Card.Title style={{ color: 'black' }}>{cardData.header}</Card.Title>
            <Card.Text>{cardData.discription}</Card.Text>
            <div className="justify-content-between">
              <Button href={`/route/${cardData.id}`} variant="warning">
                NOKK INFORMATION
              </Button>
              {user?.id === cardData.user_id && (
                <ButtonGroup aria-label="Basic example">
                  <Button onClick={() => deleteHandler(cardData.id)} variant="warning">
                    DELETE THIS
                  </Button>
                  <Button onClick={() => handleEdit(cardData)} variant="warning">
                    EDIT
                  </Button>
                </ButtonGroup>
              )}
            </div>
          </Card.Body>
        </>
      )}
    </Card>
  );
}
