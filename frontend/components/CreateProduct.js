import React, { useState } from 'react';
import useForm from '../lib/useForm';
import Form from './styles/Form';

function CreateProduct() {
  // destructuring the exports from the function into these variables
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    image: '',
    name: 'Dalton',
    price: 32455,
    description: 'these are the coolest shoes',
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputs);
  }

  return (
    <Form onSubmit={handleSubmit}>
      {/* field set allows you to control a group of inputs at a time */}
      <fieldset>
        <label htmlFor="image">
          Image
          <input type="file" id="image" name="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            placeholder="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>

        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}

export default CreateProduct;
