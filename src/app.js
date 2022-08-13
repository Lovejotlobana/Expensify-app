import React from 'react';
import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
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
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>
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

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <AppRouter />
//     </Provider>
//   </React.StrictMode>
// );
const app = ReactDOM.createRoot(document.getElementById('root'));
app.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
