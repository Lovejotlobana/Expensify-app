import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
// import configureStore from '../store/configureStore';
// const ExpenseListItem = ({ description, amount, createdAt }) => (
//   <div>
//     <h3>{description}</h3>
//     <p>
//       {amount} - -{creat*edAt}
//     </p>
//   </div>
// );
// const store = configureStore();

const ExpenseListItem = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{props.expense.description}</h3>
      <p>
        ${props.expense.amount} :{' '}
        {moment(props.expense.createdAt).format('MMMM Do, YYYY')}
      </p>
      <button
        onClick={() => {
          props.dispatch(removeExpense(props.expense.id));
        }}
      >
        Remove
      </button>
      <button
        onClick={() => {
          navigate(`${props.expense.id}`, { replace: true });
        }}
      >
        Edit{' '}
      </button>
    </div>
  );
};
export default connect()(ExpenseListItem);
