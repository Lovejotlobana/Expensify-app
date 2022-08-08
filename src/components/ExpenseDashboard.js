import React from 'react';
import { Outlet } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
const ExpenseDashboard = () => (
  <div>
    <h2> Expensify Dashboard</h2>
    <h5>
      <ExpenseList />
      <ExpenseListFilters />
    </h5>
    <Outlet />
  </div>
);

export default ExpenseDashboard;
