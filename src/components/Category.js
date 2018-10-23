import React from 'react'

const Category = ({title}) => (
  <div className="category-el">
    <p className={title.toLowerCase()}>
      {title}
    </p>
  </div>
)

export default Category