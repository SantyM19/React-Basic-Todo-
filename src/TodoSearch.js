import React from 'react'
import "./TodoSearch.css";

function TodoSearch() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log('Los usuarios buscan todos de ' + searchValue);

  return (
    <input
      placeholder="conquistar el mundo"
      className="TodoSearch"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };