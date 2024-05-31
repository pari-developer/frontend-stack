import React, { useState } from 'react';

import '../App.css';

export const Form = () => {
  const gender = ['female', 'male'];
  const [formElements, setFormElements] = useState({
    fname: '',
    lname: '',
    datepicker: '',
    gender: '',
    location: '',
  });
  const [errors, setErrors] = useState({});
  let validationErrors = {};
  const handleFormElementChange = (e) => {
    setFormElements((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleDateChange = (e) => {
    const date = e.target.valueAsDate;
    const formattedDate = date ? date.toISOString().split('T')[0] : '';
    setFormElements((prev) => {
      return { ...prev, [e.target.name]: formattedDate };
    });
  };

  const buildPayload = (formData) => {
    return {
      name: formData.fname,
      date: formData.fname,
      location: formData.location,
    };
  };
  const payload = buildPayload(formElements);
  const handleProcessForm = async (e) => {
    e.preventDefault();
    alert(`${formElements.fname} form is processed`);
    let validationErrors = {};
    for(let key in formElements) {
        if(formElements[key]=== "" ) {
            validationErrors[key] = `${key} cannot be empty`
        }
    }

    setErrors(validationErrors);
    console.log(validationErrors)
    if(Object.keys(validationErrors).length > 0) {
       return false;
    }
    setErrors({});

    // const response = await fetch(
    //   `${defaultEnv.ApiUrl}orders/api/v4/orders/create`,
    //   {
    //     method: 'POST',
    //     body: JSON.stringify(payload),
    //     headers: await requestHeaders(instance),
    //   }
    // );

    // if (response.ok) {
    //   const createData = await response.json();
    //   return {
    //     orderReference: createData.orderReference,
    //   };
    // }

    // return {
    //   orderReference: '',
    //   errorMessage: errorMessage,
    // };

  };

  return (
    <div className='form-container' data-testid='root-div'>
      <h4>Form Component</h4>
      <form className='flex-form' onSubmit={handleProcessForm}>
      {errors.fname && <div className="error">{errors.fname}</div>}
        <label htmlFor='fname'>FName</label>
        <input
          type='text'
          name='fname'
          value={formElements.fname}
          onChange={handleFormElementChange}
        />
        <label htmlFor='lname'>LName</label>
        <input
          type='text'
          name='lname'
          value={formElements.lname}
          onChange={handleFormElementChange}
        />
        <label htmlFor='date'>Date of Birth</label>
        <input
          type='date'
          name='datepicker'
          value={formElements.datepicker}
          onChange={handleDateChange}
        />
        <div>
          <label htmlFor='gender'>Gender</label>
          {gender.map((item) => {
            return (
              <div key={item}>
                <label htmlFor={item}>{item}</label>
                <input
                  type='radio'
                  name='gender'
                  value={item}
                  checked={formElements.gender === item}
                  onChange={handleFormElementChange}
                />
              </div>
            );
          })}
        </div>
        <label htmlFor='location'>Location</label>
        <select
          name='location'
          value={formElements.location}
          onChange={handleFormElementChange}
        >
          {['India', 'Poland'].map((item) => {
            return <option key={item} value={item}>{item}</option>;
          })}
        </select>
        <input type='submit' />
      </form>
    </div>
  );
};
