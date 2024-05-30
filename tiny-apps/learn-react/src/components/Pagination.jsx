import { useState, useEffect, memo } from 'react';

import { LoadingSpinner } from './Spinner';

import '../App.css';

export function Pagination() {
  //state to track number of records
  const [todos, setTodos] = useState([]);
  //state to track records per page
  const [todosPerPage, setTodosPerPage] = useState(10);
  //state to track user viewing the current page
  const [pageIndex, setPageIndex] = useState(1);
  const recordValues = [10, 20, 50];

  //get the data from API
  useEffect(() => {
    const getResult = async () => {
      const data = await fetch(`https://jsonplaceholder.typicode.com/todos`);
      const dataToJson = await data.json();
      setTodos(dataToJson);
    };
    getResult();
  }, []);

  const totalPages = Math.ceil(todos.length / todosPerPage);
  const buttonsArr = [...Array(totalPages + 1).keys()].slice(1);
  const endIndex = pageIndex * todosPerPage;
  const start = endIndex - todosPerPage;

  // const start = (pageIndex - 1) * todosPerPage;

  const handleSelectChange = (e) => {
    const { value } = e.target;
    setTodosPerPage(value);
    setPageIndex(1);
  };

  const handlePaginatedButtonClick = (item) => {
    setPageIndex(item);
  };
  const handlePrevClick = () => {
    setPageIndex((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setPageIndex((prev) => prev + 1);
  };

  return (
    <div>
      <h4>Pagination Component</h4>
      {todos.length ? (
        <div>
          <select onChange={handleSelectChange}>
            {recordValues?.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
          {todos?.slice(start, endIndex).map((item) => {
            const { id, title } = item;
            return <Item key={id} id={id} name={title} />;
          })}
          <button disabled={start < 1} onClick={handlePrevClick}>
            Prev
          </button>{' '}
          {buttonsArr.slice(0, totalPages)?.map((item) => {
            return (
              <>
                <button
                  className={` page-item ${item === pageIndex ? 'active' : ''}`}
                  onClick={() => handlePaginatedButtonClick(item)}
                >
                  {item} |{' '}
                </button>
                <span> </span>
              </>
            );
          })}{' '}
          <button onClick={handleNextClick} disabled={pageIndex >= totalPages}>
            Next
          </button>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}

export const Item = memo(({ id, name }) => {
  return (
    <ul>
      <span>
        {id} - {name}
      </span>
    </ul>
  );
});
