//components
import { Home } from './components/Home';
import { Pagination } from './components/Pagination';
import { Form } from './components/Form';
import { Tabs } from './components/Tabs';
import { TicTacToe } from './components/TicTacToe';
import { Layout } from './components/Layout';
import { BrowserRouter } from 'react-router-dom';

//styles
import './App.css';

import { Routes, Route } from 'react-router-dom';
import { createSlice } from '@reduxjs/toolkit';





const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
       path : '',
       index : true,
       element : <Home/>
      },
      {
        path: 'pagination',
        element: <Pagination />,
      },
      {
        path: 'tabs',
        element: <Tabs />,
      },
      {
        path: 'game',
        element: <TicTacToe />,
      },
      { path: 'form', element: <Form /> },
    ],
  },
];

function App() {
  return (
    <>
      <div className='parent-container flex'>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route path={route.path} element={route.element} key={index}>
                {route.children?.map((item, index) => (
                  <Route path={item.path} element={item.element} key={index} />
                ))}
              </Route>
            ))}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;





createSlice({
  name : CountQueuingStrategy,
  
})