import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(
  addExpense({ description: 'Salary', amount: 100, createdAt: 0 })
);
store.dispatch(addExpense({ description: 'RENt', amount: 500, createdAt: 0 }));
store.dispatch(
  addExpense({ description: 'Water Bill', amount: 50, createdAt: -0 })
);
// store.dispatch(setTextFilter('rent'));
store.dispatch(sortByAmount());
console.log(store.getState());

var jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });

// store.dispatch(removeExpense({ id: exp1.payload.id }));
//store.dispatch(editExpense(exp2.payload.id, { amount: 99 }));
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());
// store.dispatch(setEndDate(300));

ReactDOM.render(jsx, document.getElementById('app'));
