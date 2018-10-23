import React from 'react'

const CategoryTable = ({ categoryArray }) => { 
  const tbodyJSX = categoryArray.map((array, index) => {
    return (
      <tr key={index}>
        {/* <td>{array.CATEGORY}</td> */}
        <td>{array.BRAND}</td>
        <td>{array.DESCRIPTION}</td>
        <td>{array['SEGMENT NAME']}</td>
        <td>{array['MAX AUDIENCE SIZE']}</td>
        
      </tr>
    )
  }) 

  return (  
    <div>

      <table>
        <thead>
          <tr>
            {/* <th>Category</th> */}
            <th>Brand</th>
            <th>Description</th>
            <th>Segment name</th>
            <th>Max Audience Size</th>
          </tr>
        </thead>
        <tbody>
          {tbodyJSX}
        </tbody>
      </table>
    </div>
  )
}

export default CategoryTable