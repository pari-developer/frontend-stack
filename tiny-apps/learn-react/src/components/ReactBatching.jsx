import React, { useState, useLayoutEffect, useDebugValue, useEffect } from 'react';

export const ReactBatching = () => {
  const [name, setName] = useState();
  const [city, setCity] = useState();

//   const counter = isCounter();

  const onLoadUser = () => {

    fetchData().then((data)=>{
        setName(data);
        setCity('New York');
    })
  };

  return (
    <>
      <div>React Batching</div>
      <p>Name : {name}</p>
      <p>City : {city}</p>
      <button onClick={onLoadUser}>Fetch user details</button>
      Counter : {'counter'}
      <LogEvents />
    </>
  );
};

function LogEvents(props) {
  useLayoutEffect(() => {
    console.log('commit');
  },[]);
  console.log('render');
  return null;
}

function fetchData() {
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve('Pranita')
      },100)
    })
}


function isCounter () {
    const [count,setCount] = useState(0);
    useDebugValue(count , (count) => `please  ${count}`);
    useEffect(()=>{
    const interval = setInterval(()=>{
        setCount((count)=>count+1)
    },1000);
    return () => clearInterval(interval);
    },[]);
    return count;
}