import React, { useState, useEffect } from 'react';
import './style.css';
import Search from './Search.js';
import Deletebtn from './Deletebtn.js';
import DeleteAllbtn from './DeleteAllbtn.js';

export default function App() {
  const data = [
    'Arpita',
    'Shailendra',
    'Pourush',
    'Tanmay',
    'Darshana',
    'Ayush',
    'Abhishek',
    'Abhishek gupta',
    'Abhishek tembulkar',
    'Abhishek jain',
    'sonam',
    'Gaiyatri',
    'Purva',
  ];

  const [employees, setEmployees] = useState(data);
  const [friendlList, setFriendList] = useState(data);
  const [selectedList, setSelectedList] = useState([]);
  const [searchField, setSearchField] = useState('');

  useEffect(() => {
    list();
  }, [searchField, employees]);

  const list = () => {
    const filteredEmployees = employees.filter((employee) => {
      return employee.toLowerCase().startsWith(searchField.toLowerCase());
    });
    setFriendList(filteredEmployees);
  };

  const handleOnChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleOnCheckBoxChange = (isChecked, employee) => {
    if (isChecked) {
      setSelectedList([...selectedList, employee]);
    } else {
      setSelectedList(selectedList.slice(0, -1));
    }
  };

  const handleOnClick = () => {
    if (friendlList.length > 0) {
      const selItems = employees?.filter((item) => {
        return !selectedList.includes(item.toLowerCase());
      });
      setEmployees(selItems);
      setSearchField('');
      console.log(selItems);
    }
  };

  const DeleteAll = () => {
    setSelectedList([]);
    setEmployees([]);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <Search
        searchField={searchField}
        filteredEmployees={friendlList}
        handleOnChange={handleOnChange}
        handleOnCheckBoxChange={handleOnCheckBoxChange}
      />
      <Deletebtn handleOnClick={handleOnClick} />
      <DeleteAllbtn employee={friendlList} DeleteAll={DeleteAll} />
    </div>
  );
}
