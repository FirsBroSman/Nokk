import React from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

export default function EditCard({ oneCard, submitHandler, onCancelEdit }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    await submitHandler(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1" style={{ color: '#FFC618' }}>Nokk</InputGroup.Text>
        <Form.Control name="img" aria-label="Username" aria-describedby="basic-addon1" />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1" style={{ color: '#FFC618' }}>HEADER</InputGroup.Text>
        <Form.Control
          name="header"
          defaultValue={oneCard.header}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup className="mb-1">
        <InputGroup.Text id="basic-addon1" style={{ color: '#FFC618' }}>DISCRIPTION</InputGroup.Text>
        <Form.Control
          name="discription"
          defaultValue={oneCard.discription}
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <br />
      <div className="d-flex justify-content-center">
        <Button type="submit" variant="secondary" size="sm" style={{ color: '#FFC618' }}>
          EDIT
        </Button>
        <Button onClick={onCancelEdit} variant="secondary" size="sm" style={{ color: '#FFC618', marginLeft: '5px' }}>
          CANCEL
        </Button>
      </div>
    </Form>
  );
}
