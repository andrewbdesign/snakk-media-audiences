import React from 'react'
import Modal from 'react-modal'
import CategoryTable from './CategoryTable'

const CategoryModal = ({selectedCategory, handleClose, categoryArray}) => {
  if (categoryArray.length === 0) { return <div></div>}

  return (
    <div>
      <Modal
        ariaHideApp={false}
        isOpen={!!selectedCategory}
        contentLabel="Selected Category"
        onRequestClose={handleClose}
        className="category-modal"
      > 
        <div className="category-modal__inner">
          <h1>Category: {selectedCategory}</h1>
          <CategoryTable categoryArray={categoryArray} />
          <button onClick={handleClose}>
            <span><i className="far fa-times-circle"></i></span>
          </button>
        </div>

      </Modal>
    </div>
  )
}

export default CategoryModal