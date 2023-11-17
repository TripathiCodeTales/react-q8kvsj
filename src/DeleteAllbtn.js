import React, { useState } from 'react';
import DeleteAllbtn from './DeleteAllbtn.js';

export default function DeleteAllbtn({ employee, DeleteAll }) {
  const [deletedItems, setDeletedItems] = useState([]);

  const handleOnDeleteAll = () => {
    employee.splice(0, employee.length);
    console.log(employee);
    DeleteAll(employee);
  };

  return (
    <button
      onClick={handleOnDeleteAll}
      checked={employee.checked}
      type={'checkbox'}
      ref={employee.btnRef}
    >
      DeleteAll
    </button>
  );
}
