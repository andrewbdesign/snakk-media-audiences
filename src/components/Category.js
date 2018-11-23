import React from 'react'

const Category = ({title = '', handlePick}) => (
  <div 
    id={
      title.replace(/\s+/g, '-')
           .replace(/&+/g, 'and')
           .replace(/'/g, '')
           .toLowerCase() } 
    className="category-el"
    onClick={handlePick}
    onMouseOver={ () => {
      console.log('yoooo')
    }}
  >
    <p className={title.replace(/\s+/g, '-')
           .replace(/&+/g, 'and')
           .replace(/'/g, '')
           .toLowerCase()}>
      {title}
    </p>
  </div>
)

export default Category