import React, { useState } from 'react';

//update a property - object
export const UpdateObject = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handlePointerMove = (e) => {
    console.log(e.clientX);
    let pos = {};
    pos.x = e.clientX;
    pos.y = e.clientY;
    setPosition(pos);
  };
  return (
    <div
      style={{ position: 'relative', height: '100vh', width: 'vw' }}
      onPointerMove={(e) => handlePointerMove(e)}
    >
      <div
        style={{
          position: 'absolute',
          backgroundColor: 'red',
          height: 10,
          width: 10,
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px) `,
          left: -10,
          top: 10,
        }}
      />
    </div>
  );
};

//insert a property - array
let nextId = 1;
const initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye' },
  { id: 2, name: 'Louise Nevelson' },
  { id: 3, name: 'Lovina' },
];

export const InsertList = () => {
  const [data, setData] = useState(initialArtists);
  const handleInsert = (pos = 1) => {
    // Ensure pos is within bounds
    if (pos < 0) pos = 0;
    if (pos > data.length) pos = data.length;

    // Split the data array into two parts
    let arr = data.slice(0, pos);
    let newArr = data.slice(pos);

    // Create the new element to be inserted
    const newElement = {
      id: nextId++,
      name: 'Blue',
    };

    // Combine the arrays with the new element inserted at position 'pos'
    let nextArr = [...arr, newElement, ...newArr];

    // Update the state with the new array
    setData(nextArr);
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
      }}
    >
      {data?.map((item, index) => {
        return <p key={index}>{item.name}</p>;
      })}
      <button
        onClick={() => {
          handleInsert();
        }}
      >
        Insert
      </button>
    </div>
  );
};

