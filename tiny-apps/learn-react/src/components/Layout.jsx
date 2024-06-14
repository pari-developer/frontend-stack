import React from 'react';
import {Link, Outlet } from 'react-router-dom';


const Navigation = () => (
    <nav>
      <ul>
        <li>
          <Link to="/pagination">Pagination</Link>
        </li>
        <li>
          <Link to="/tabs">Tabs</Link>
        </li>
        <li>
          <Link to="/game">TicTacToe</Link>
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
      </ul>
    </nav>
  );

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
