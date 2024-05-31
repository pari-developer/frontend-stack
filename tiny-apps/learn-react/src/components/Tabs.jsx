import React, { useState } from 'react';

import '../App.css';

const tabs = ['React', 'Next', 'Vue', 'Rust'];
const TabButton = ({ children, ...props }) => {
  const { selected,buttonContainer } = props;
  const ButtonContainer = buttonContainer;
  return (
    <>

    <button {...props} className={selected ? 'active-item' : ''}>
    <h4>{children}</h4>
    </button>
    </>
  );
  
};

export const Tabs = () => {
  const [currentItem, setCurrentItem] = useState('');
  return (
    <section>
      <h4>Tabs component</h4>
        {tabs.map((item) => {
          return (
            <TabButton
              key={item}
              selected={currentItem === item}
              onClick={() => {
                setCurrentItem(item);
              }}
            >
              {item}
            </TabButton>
          );
        })}
      <div className='tab-content'>
        {currentItem ? `I am ${currentItem}` : ''}
      </div>
    </section>
  );
};
