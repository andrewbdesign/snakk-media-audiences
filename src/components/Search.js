import React from 'react'

const Search = ({searchChange, inputValue}) => (
  <div>
    <div className="search-form">
      <input 
        aria-label="Search by category or brand"
        type="search"
        className="search-form__input"
        placeholder="Search by Category or Brand"
        autoComplete="off"
        onChange={searchChange}
      />
      <button 
        aria-label="Search categories"
        className="search-form__button"
      >
        <i className="fas fa-search"></i>
      </button>
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