import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <h1>Expensify </h1>
    <NavLink to='/'>Home </NavLink>

    <NavLink to='/create'>Create </NavLink>

    <NavLink to='/help'>Help </NavLink>
    <NavLink to='/invoices'>Invoices</NavLink>
  </div>
);

export default Header;
