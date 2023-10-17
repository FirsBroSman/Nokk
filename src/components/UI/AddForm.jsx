import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function AddForm({ submitHandler }) {
  return (
    <>
      <br />
      <Form onSubmit={submitHandler} encType="multipart/form-data">
        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label style={{ color: '#FFC618' }}>GIVE ME U NOKK</Form.Label>
          <Form.Control name="img" type="text" placeholder="add a link" />
          <Form.Text className="text-muted" style={{ color: '#FFC618' }}>ADD PIC</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label style={{ color: '#FFC618' }}>HEADER</Form.Label>
          <Form.Control name="header" type="text" placeholder="nokk name" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '500px' }}>
          <Form.Label style={{ color: '#FFC618' }}>DISCRIPTION</Form.Label>
          <Form.Control name="discription" type="text" placeholder="describe your nokk" />
          <Form.Text className="text-muted" style={{ color: '#FFC618' }}>
            ADD U DISCRIPTION
          </Form.Text>
        </Form.Group>

        <Button variant="secondary" type="submit" style={{ color: '#FFC618' }}>
          Nokk THIS!
        </Button>
      </Form>
    </>
  );
}
