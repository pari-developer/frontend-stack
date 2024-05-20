import React from "react";

export const Input = ({value,setValue}) => {
    const handleChange = (e) =>  {
        const {value} = e.target
        setValue(value)
    }
  return <div>
    <input type="text" value={value} onChange={(e)=>handleChange(e)}/>
  </div>;
};


