import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Invoices = () => {
  return (
    <div>
      <h3>
        <NavLink to='/invoices/showall'>Show all</NavLink>
      </h3>
      <h2>
        <Outlet />
      </h2>
    </div>
  );
};

export default Invoices;
