import React, { Component } from 'react'

import Categories from './Categories'
import CategoryModal from './CategoryModal'
import Header from './Header'
import Search from './Search'

import data from '../data/audiences.json'

const categories = []
for (let i = 0; i < data.length; i++) {
  const category = data[i].CATEGORY
  if (!categories.includes(category)) {
    categories.push(category)
  }
}

const categoryArrays = []
for (let i = 0; i < categories.length; i++) {
  const categoryArray = data.filter(item => {
    return item.CATEGORY === categories[i]
  })
  categoryArrays.push(categoryArray)
}
console.log('categoryArrays', categoryArrays)

const brands = []
for (let i = 0; i < data.length; i++) {
  const brand = data[i].BRAND
  if(!brands.includes(brand)) {
    brands.push(brand)
  }
}
console.log('brands', brands)

class Audiences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: categories,
      inputValue: '',
      categoryArrays,
      selectedCategory: '',
      brands
    }
  }

  onSearchHandle = (e) => {
    e.preventDefault()
    const inputValue = e.target.value
    this.setState({ inputValue })
  }

  onPickHandle = (value) => {
    const selectedCategory = value.target.getAttribute('data-id')
    this.setState({ selectedCategory })
  }

  onClearCategory = () => {
    this.setState({selectedCategory: ''})
  }

  render() {
    const filteredCategories = this.state.items.filter(item => {
      return item.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })

    const categoryArray = data.filter(item => {
      return item.CATEGORY.toLowerCase() === this.state.selectedCategory.toLowerCase() 
      // ||
      //        item.BRAND.toLowerCase() === this.state.
    })

    return (
      <div>
        <Header />
        <div className="container">
          <h1>SNAKK Audiences</h1>
          <p>AUS Segment Taxonomy</p>
          <Search 
            searchChange={this.onSearchHandle} 
            inputValue={this.state.inputValue}
          />
          <Categories 
            categories={filteredCategories}
            handlePick={this.onPickHandle}
          />
          <CategoryModal 
            ariaHideApp={false}
            selectedCategory={this.state.selectedCategory}
            handleClose={this.onClearCategory}
            categoryArray={categoryArray}
          />
        </div>
      </div>
    )
  }
}

export default Audiences