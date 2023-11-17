import React, { useState } from 'react';

export default function Search({
  searchField,
  handleOnChange,
  handleOnCheckBoxChange,
  filteredEmployees,
}) {
  return (
    <>
      <h1> Employees Name </h1>
      <div>
        <input
          value={searchField}
          type="search"
          placeholder="Search Friend"
          onChange={(e) => handleOnChange(e)}
        />
      </div>
      <div>
        {filteredEmployees &&
          filteredEmployees?.map((employee, index) => (
            <ul>
              <input
                key={employee}
                type="checkbox"
                Checked={false}
                onChange={(event) =>
                  handleOnCheckBoxChange(
                    event.target.checked,
                    employee.toLowerCase()
                  )
                }
              />
              {employee}
            </ul>
          ))}
      </div>
    </>
  );
}
