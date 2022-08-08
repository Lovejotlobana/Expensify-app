// import React from 'react';
// import AddExpenseForm from './AddExpenseForm';
// import { connect } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { editExpense } from '../actions/expenses';
// // const { id } = useParams();

// const EditExpensePage = (props) => {
//   console.log('edit expense props', props);
//   return (
//     <div>
//       <h2>EditExpensePage</h2>
//       <AddExpenseForm
//         expense={props.expense}
//         onSubmit={(expense) =>
//           props.dispatch(editExpense(props.expense.id, expense))
//         }
//       />
//     </div>
//   );
// };
// const mapStateToProps = (state, props) => {
//   const { id } = useParams();

//   return {
//     expense: state.expenses.find((expense) => expense.id === id),
//   };
// };

// export default connect(mapStateToProps)(EditExpensePage);
import React from 'react';
import AddExpenseForm from './AddExpenseForm';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  const { id } = useParams();
  const expense1 = useSelector((state) =>
    state.expenses.find((expense) => expense.id === id)
  );
  const dispatch = useDispatch();
  return (
    <div>
      <h2>EditExpensePage</h2>
      <AddExpenseForm
        expense={expense1}
        onSubmit={(expense) => dispatch(editExpense(expense1.id, expense))}
      />
    </div>
  );
};
export default EditExpensePage;
