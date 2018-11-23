import React from 'react'

const Category = ({title = '', handlePick}) => (
  <div 
    data-id={title} 
    className="category-el"
    onClick={handlePick}
    onMouseOver={ () => {
      console.log('yoooo')
    }}
  >
    <p className={title.toLowerCase()
           }>
      {title}
    </p>
  </div>
)

export default Category