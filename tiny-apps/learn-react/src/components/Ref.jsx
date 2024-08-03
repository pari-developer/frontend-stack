import { Button } from 'bootstrap';
import React, { useRef, useEffect, useState, forwardRef } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [catList, setCatList] = useState(setupCatList);
  const countRef = useRef(0);
  const countDisplayRef = useRef(null);
  const interval = useRef(null);
  const itemsRef = useRef(null);

  const onStartClick = () => {
    interval.current = setInterval(() => {
      countRef.current += 1;
      countDisplayRef.current.textContent = `Ref: ${countRef.current}`;
      // setCount(prev => prev + 1)
    }, 1000);
  };
  const onStopClick = () => {
    clearInterval(interval.current);
  };
  const onRefreshClick = () => {
    // countRef.current = 0;
    clearInterval(interval.current);
    interval.current = null;
    countRef.current = 0;
    countDisplayRef.current.textContent = `Ref: ${countRef.current}`;

    // setCount(0)
  };
  console.log(count.current);

  const getMap = () => {
    if (!itemsRef.current) {
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  };
  console.log(itemsRef.current, 'itemsRef');
  console.log(catList);
  const scrollTo = (cat) => {
    const node = getMap();
    if (node.has(cat)) {
      node.get(cat).scrollIntoView({ behavior: 'smooth', inline: 'center' });
    }
  };
  return (
    <div style={{ paddingLeft: '5px' }}>
      <>
        <h4>Counter</h4>
        <div
          style={{
            display: 'flex',
            gap: '5px',
            marginBottom: '10px',
            marginLeft: '50px',
          }}
        >
          <button onClick={onStartClick}>Start</button>
          <button onClick={onStopClick}>Stop</button>
          <button onClick={onRefreshClick}>Refresh</button>
        </div>
        <div
          style={{
            border: '1px solid black',
            margin: '0 auto',
            padding: '5px',
            width: '25%',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* Ref : {countRef.current} */}
          State : {count}
        </div>
        <hr />
        <div ref={countDisplayRef}> Ref : {countRef.current}</div>
      </>
      <h4>Cats</h4>
      <button
        onClick={() => scrollTo(catList[5])}
        style={{ marginRight: '10px' }}
      >
        Scroll to Tom
      </button>
      <button onClick={() => scrollTo(catList[9])}>Scroll to Jerry</button>

      {
        <ul>
          {catList.map((cat) => (
            <li
              key={cat}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat, node);
                } else {
                  delete map.delete(cat);
                }
              }}
            >
              <img src={cat} />
            </li>
          ))}
        </ul>
      }

      <h4>ForwardRefDemo</h4>
      <ForwardRefDemo />
    </div>
  );
};

function setupCatList() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push('https://loremflickr.com/320/240/cat?lock=' + i);
  }

  return catList;
}

 const InputBox = forwardRef((props,ref) => {
  return <input type='text' {...props} ref={ref} />;
});

const ForwardRefDemo = () => {
  const inputRef = useRef(null);
  return (
    <>
      <InputBox ref={inputRef} /> <br/>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </>
  );
};

