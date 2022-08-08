import { v4 as uuidv4 } from 'uuid';

export const editExpense = (id, updates) => {
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates,
  };
};
export const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0,
} = {}) => {
  let expense = {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  };

  return {
    type: 'ADD_EXPENSE',
    payload: expense,
  };
};

// export const removeExpense = ({ id } = {}) => {

export const removeExpense = (id) => {
  return {
    type: 'REMOVE_EXPENSE',
    id,
  };
};
