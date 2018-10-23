import React from 'react'
import Category from './Category'

const Categories = ({categories, handlePick}) => {
  if (categories.length === 0) {
    return <p>Sorry, there is no match <span role="img" aria-label="no results hashtag sad face">🙁</span></p>
  }
  return (
    <div className="category-list">
      {
        categories.map((item, index) => {
          return (
            <Category 
              key={index} 
              title={item}
              handlePick={handlePick}
            />
          )
        })
      }
    </div>
  )
}

export default Categories