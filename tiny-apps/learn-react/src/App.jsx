//components
import { Home } from './components/Home';
import { Pagination } from './components/Pagination';
import { Form } from './components/Form';
import { Tabs } from './components/Tabs';
import { TicTacToe } from './components/TicTacToe';
import { Layout } from './components/Layout';
import { Accordion } from './components/Accordion';
import { Counter } from './components/Ref';
import { ReactBatching } from './components/ReactBatching';

import { BrowserRouter } from 'react-router-dom';

//styles
import './App.css';

import { Routes, Route } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        index: true,
        element: <Home />,
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
      { path: 'accordion', element: <Accordion /> },
      { path: 'ref', element: <Counter /> },
      { path: 'batching', element: <ReactBatching /> },

      
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
