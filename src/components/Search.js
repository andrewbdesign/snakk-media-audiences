import React from 'react'

const Search = ({searchChange, inputValue}) => (
  <div>
    <div className="search-form">
      <input 
        type="search"
        className="search-form__input"
        placeholder="Search Categories"
        autoComplete="off"
        onChange={searchChange}
      />
    </div>
    <div>
      {
        !inputValue ? 
          <p>Type something to get started</p> 
          : 
          <p>Your current query search is: {inputValue}</p>
      }
    </div>
  </div>
)

export default Search