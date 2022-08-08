import * as React from 'react';
import { NavLink, Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import ExpenseDashboard from '../components/ExpenseDashboard';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import CreateExpense from '../components/CreateExpense';
import CreateExpense1 from '../components/CreateExpense1';
import ShowAll from '../components/ShowAll';
import Invoices from '../components/Invoices';
import ShowInvoice from '../components/ShowInvoice';

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<ExpenseDashboard />} />
      <Route path=':id' element={<EditExpensePage />} />

      <Route path='invoices' element={<Invoices />}>
        <Route path='showall' element={<ShowAll />}>
          <Route path=':invoiceId' element={<ShowInvoice />} />
        </Route>
      </Route>
      <Route path='create' element={<AddExpensePage />} />
      {/* <Route path='editExpensePage' element={<EditExpensePage />}> */}

      {/* </Route> */}

      <Route path='help' element={<HelpPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
