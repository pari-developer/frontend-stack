import '../App.css';

const accordionData = [
  {
    title: 'Section 1',
    content: 'Content of Section 1',
    subSections: [
      {
        title: 'SubSection 1.1',
        content: 'Content of SubSection 1.1',
        subSections: [
          {
            title: 'SubSubSection 1.1.1',
            content: 'Content of SubSubSection 1.1.1',
          },
          {
            title: 'SubSubSection 1.1.2',
            content: 'Content of SubSubSection 1.1.2',
          },
        ],
      },
      {
        title: 'SubSection 1.2',
        content: 'Content of SubSection 1.2',
        subSections: [
          {
            title: 'SubSubSection 1.2.1',
            content: 'Content of SubSubSection 1.2.1',
          },
        ],
      },
    ],
  },
  {
    title: 'Section 2',
    content: 'Content of Section 2',
    subSections: [
      {
        title: 'SubSection 2.1',
        content: 'Content of SubSection 2.1',
        subSections: [],
      },
    ],
  },
  {
    title: 'Section 3',
    content: 'Content of Section 3',
    subSections: [],
  },
];

import React, { useState } from 'react';
import { Prev } from 'react-bootstrap/esm/PageItem';

export const Accordion = () => {
  return <AccordionComp data={accordionData} />;
};

export const AccordionComp = ({ data, parentIndex = '' }) => {
  const [open, setOpen] = useState({});
  const handleClick = (index) => {
    setOpen((prev) => {
      return { ...prev, [index]: !prev[index] };
    });
  };
  return (
    <div className='accordion-container'>
      {data?.map((item, index) => {
        const currentIndex = parentIndex ? `${parentIndex}-${index}` : index;
        return (
          <>
            <div
              className='accordion-item'
              key={index}
              onClick={() => handleClick(index)}
            >
              <div key={index} className='accordion-title'>
                {item.title}
              </div>
              {open[index] && (
                <>
                  <div className='accordion-content'>
                    <hr />
                    <div key={index}>{item.content}</div>
                  </div>
                </>
              )}
            </div>

              {item.subSections?.length > 0 && (
                <div className="accordion-subsections">
                <AccordionComp
                  data={item.subSections}
                  parentIndex={currentIndex}
                />
                </div>
              )}
          </>
        );
      })}
    </div>
  );
};
