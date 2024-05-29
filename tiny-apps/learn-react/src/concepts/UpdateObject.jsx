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
      style={{ position: 'relative'}}
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

//normalize the above nested Data
export const initialTravelPlan = {
  id: 0,
  title: '(Root)',
  childPlaces: [
    {
      id: 1,
      title: 'Earth',
      childPlaces: [
        {
          id: 2,
          title: 'Africa',
          childPlaces: [
            {
              id: 3,
              title: 'Botswana',
              childPlaces: [],
            },
            {
              id: 4,
              title: 'Egypt',
              childPlaces: [],
            },
            {
              id: 5,
              title: 'Kenya',
              childPlaces: [],
            },
            {
              id: 6,
              title: 'Madagascar',
              childPlaces: [],
            },
            {
              id: 7,
              title: 'Morocco',
              childPlaces: [],
            },
            {
              id: 8,
              title: 'Nigeria',
              childPlaces: [],
            },
            {
              id: 9,
              title: 'South Africa',
              childPlaces: [],
            },
          ],
        },
        {
          id: 10,
          title: 'Americas',
          childPlaces: [
            {
              id: 11,
              title: 'Argentina',
              childPlaces: [],
            },
            {
              id: 12,
              title: 'Brazil',
              childPlaces: [],
            },
            {
              id: 13,
              title: 'Barbados',
              childPlaces: [],
            },
            {
              id: 14,
              title: 'Canada',
              childPlaces: [],
            },
            {
              id: 15,
              title: 'Jamaica',
              childPlaces: [],
            },
            {
              id: 16,
              title: 'Mexico',
              childPlaces: [],
            },
            {
              id: 17,
              title: 'Trinidad and Tobago',
              childPlaces: [],
            },
            {
              id: 18,
              title: 'Venezuela',
              childPlaces: [],
            },
          ],
        },
        {
          id: 19,
          title: 'Asia',
          childPlaces: [
            {
              id: 20,
              title: 'China',
              childPlaces: [],
            },
            {
              id: 21,
              title: 'India',
              childPlaces: [],
            },
            {
              id: 22,
              title: 'Singapore',
              childPlaces: [],
            },
            {
              id: 23,
              title: 'South Korea',
              childPlaces: [],
            },
            {
              id: 24,
              title: 'Thailand',
              childPlaces: [],
            },
            {
              id: 25,
              title: 'Vietnam',
              childPlaces: [],
            },
          ],
        },
        {
          id: 26,
          title: 'Europe',
          childPlaces: [
            {
              id: 27,
              title: 'Croatia',
              childPlaces: [],
            },
            {
              id: 28,
              title: 'France',
              childPlaces: [],
            },
            {
              id: 29,
              title: 'Germany',
              childPlaces: [],
            },
            {
              id: 30,
              title: 'Italy',
              childPlaces: [],
            },
            {
              id: 31,
              title: 'Portugal',
              childPlaces: [],
            },
            {
              id: 32,
              title: 'Spain',
              childPlaces: [],
            },
            {
              id: 33,
              title: 'Turkey',
              childPlaces: [],
            },
          ],
        },
        {
          id: 34,
          title: 'Oceania',
          childPlaces: [
            {
              id: 35,
              title: 'Australia',
              childPlaces: [],
            },
            {
              id: 36,
              title: 'Bora Bora (French Polynesia)',
              childPlaces: [],
            },
            {
              id: 37,
              title: 'Easter Island (Chile)',
              childPlaces: [],
            },
            {
              id: 38,
              title: 'Fiji',
              childPlaces: [],
            },
            {
              id: 39,
              title: 'Hawaii (the USA)',
              childPlaces: [],
            },
            {
              id: 40,
              title: 'New Zealand',
              childPlaces: [],
            },
            {
              id: 41,
              title: 'Vanuatu',
              childPlaces: [],
            },
          ],
        },
      ],
    },
    {
      id: 42,
      title: 'Moon',
      childPlaces: [
        {
          id: 43,
          title: 'Rheita',
          childPlaces: [],
        },
        {
          id: 44,
          title: 'Piccolomini',
          childPlaces: [],
        },
        {
          id: 45,
          title: 'Tycho',
          childPlaces: [],
        },
      ],
    },
    {
      id: 46,
      title: 'Mars',
      childPlaces: [
        {
          id: 47,
          title: 'Corn Town',
          childPlaces: [],
        },
        {
          id: 48,
          title: 'Green Hill',
          childPlaces: [],
        },
      ],
    },
  ],
};

function normalizeData(object) {
  let obj = {};
  function recursiveNormalize(item) {
    const { id, title, childPlaces } = item;
    obj[id] = { id, title, childIds: childPlaces?.map((child) => child.id) };
    if (childPlaces.length) {
      for (let child of childPlaces) {
        recursiveNormalize(child);
      }
    }
  }
  recursiveNormalize(object);
  return obj;
}

export const NormalizeComponent = () => {
  const inputObject = normalizeData(initialTravelPlan);

  const [plan, setPlan] = useState(inputObject);
  const root = plan[0];
  const childElement = root.childIds;

  const onChange = () => {};
  return (
    <ol>
      {childElement?.map((id) => (
        <PlaceTree
          key={id}
          id={id}
          plan={plan}
          parentId={0}
          handleChange={onChange}
        />
      ))}
    </ol>
  );
};

function PlaceTree({ id, parentId, plan, onComplete }) {
  const place = plan[id];
  const childIds = place.childIds;
  return (
    <li>
      {place.title}
      <button onClick={() => {
        onComplete(parentId, id);
      }}>
        Complete
      </button>
      {childIds.length > 0 &&
        <ol>
          {childIds.map(childId => (
            <PlaceTree
              key={childId}
              id={childId}
              parentId={id}
              plan={plan}
              onComplete={onComplete}
            />
          ))}
        </ol>
      }
    </li>
  );
}
