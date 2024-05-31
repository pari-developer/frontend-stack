//components
import { Pagination } from './components/Pagination';
import { Form } from './components/Form';
import { Tabs } from './components/Tabs';
import { TicTacToe } from './components/TicTacToe';

//styles
import './App.css';

function App() {
  return (
    <>
      <div className='parent-container flex'>
        <TicTacToe />
        <Tabs />
        <Form />
        <Pagination />
      </div>
    </>
  );
}

export default App;
