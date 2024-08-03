import React from 'react';
import { Outlet } from 'react-router-dom';

import '../App.css';

export const Home = () => {
  return (
    <div>
       <h4 className='home-text'>We are just getting started !</h4>
       <Outlet />
     
     
    </div>
  );
};
