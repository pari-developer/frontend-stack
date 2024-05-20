import React, { useState } from 'react';
//components
import { Input } from '../common/Input';
import { DisplayListItem } from './DisplayListItem';

//mockdata
import { data } from '../mockdata/list';

import { v4 as uuidv4 } from 'uuid';

const DisplayList = () => {
  const [val, setVal] = useState('');
  const [editedVal,setEditedVal] = useState('')
  const [list, setList] = useState(data);
  const [isEdit,setIsEdit] = useState(false)
  const [isEditableId,setIsEditableId] = useState(null);
  const handleAdd = (value) => {
    if(!value){
      return;
    }
    setList([
      ...list,
      {
        id: uuidv4(),
        first_name: value,
        gender: 'Male',
      },
    ]);
    setVal('')
  };

  const handleEdit = (id) => {
    setIsEdit(true)
    const targetIndex= list.findIndex(item => item.id === id );
    setIsEditableId(list[targetIndex].id);
  };

  console.log(list);
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Input value={val} setValue={setVal} />
        <button onClick={() => handleAdd(val)}>Add</button>
      </div>
      <DisplayListItem val={val} setVal={setVal} list={list} setList={setList} isEdit={isEdit} isEditableId={isEditableId} handleEdit={handleEdit}
      setIsEditableId={setIsEditableId} editedVal={editedVal} setEditedVal={setEditedVal}/>
    </>
  );
};

export default DisplayList;
