import React, { memo } from 'react';

import { Input } from '../common/Input';

export const DisplayListItem = memo(
  ({ val, setVal, isEdit, handleEdit, isEditableId, list, setList,setIsEditableId ,editedVal,setEditedVal}) => {
    const handleDelete = (deletedItem) => {
      const newList = list.filter((item) => {
        return item.id !== deletedItem.id;
      });
      setList(newList);
    };

    const handleSave = () => {
        const updatedList =[...list];
        const index = updatedList.findIndex((item)=> item.id === isEditableId);
        updatedList[index].first_name = editedVal;
        setList(updatedList)
        setIsEditableId(null)
    }

    return (
      <>
        <div>
          {list?.map((item) => {
            return (
              <li key={item.id}>
                {isEditableId === item.id ? (
                  <Input value={editedVal} setValue={setEditedVal} />
                ) : (
                  item.first_name || <span>{item.gender}</span>
                )}
                <span style={{ display: 'flex' }}>
                  {isEdit && isEditableId === item.id ? (
                     <button onClick={() => handleSave()}>Save</button>
                  ) : (
                  
                    <button onClick={() => handleEdit(item.id)}>Edit</button>
                  )}
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </span>
              </li>
            );
          })}
        </div>
      </>
    );
  }
);
