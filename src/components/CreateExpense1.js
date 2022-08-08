import React from 'react';

import { useParams } from 'react-router-dom';

const CreateExpense1 = () => {
  const { name } = useParams();
  return (
    <div>
      <p>Name</p>
      <h1>CreateElement param is {name}</h1>
    </div>
  );
};

export default CreateExpense1;
