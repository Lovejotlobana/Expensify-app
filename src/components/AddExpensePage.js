import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import AddExpenseForm from './AddExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
const AddExpensePage = (props) => (
  <div>
    <h2>AddExpensePage</h2>
    <AddExpenseForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
      }}
    />
    <Outlet />
  </div>
);
export default connect()(AddExpensePage);
