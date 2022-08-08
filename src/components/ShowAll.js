import React from 'react';
import { getInvoices } from '../data/data';
import { NavLink, Outlet } from 'react-router-dom';

const ShowAll = () => {
  let invoices = getInvoices();

  return (
    <div>
      {invoices.map((invoice) => (
        <NavLink
          to={`/invoices/showall/${invoice.number}`}
          key={invoice.number}
        >
          {invoice.name}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default ShowAll;
