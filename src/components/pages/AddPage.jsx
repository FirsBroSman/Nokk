import React, { useState } from 'react';
import AddForm from '../UI/AddForm';

export default function AddPage() {
  const [inputs, setInputs] = useState([{
    img: '', header: '', discription: '',
  }]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    const response = await fetch('/api/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      const data = await response.json();
      setInputs((prev) => [...prev, data]);
    }
    e.target.reset();
    window.location = '/';
  };

  return (
    <div className="justify-content-between">
      <AddForm submitHandler={submitHandler} />
    </div>
  );
}
