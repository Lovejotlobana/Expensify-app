import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// const ExpenseList = (props) => {
//   return (
//     <div>
//       This is Expense List
//       {props.expenses.map((expense) => {
//         return <ExpenseListItem {...expense} />;
//       })}
//     </div>
//   );
// };

const ExpenseList = (props) => {
  return (
    <div>
      This is Expense List
      {props.expenses.map((expense) => {
        return <ExpenseListItem key={expense.id} expense={expense} />;
      })}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return { expenses: state.expenses };
// };
const mapStateToProps = (state) => {
  return { expenses: selectExpenses(state.expenses, state.filters) };
};

export default connect(mapStateToProps)(ExpenseList);
