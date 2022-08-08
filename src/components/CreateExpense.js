import React from 'react';
import { useParams } from 'react-router-dom';

const CreateExpense = (props) => {
  const { id } = useParams();
  return (
    <div>
      <p>Add</p>
      <h1>CreateElement param is {id}</h1>
    </div>
  );
};

export default CreateExpense;
