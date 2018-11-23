import React, { Component } from 'react'
import { TimelineMax } from 'gsap/all'

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

const brands = []
for (let i = 0; i < data.length; i++) {
  const brand = data[i].BRAND
  if(!brands.includes(brand)) {
    brands.push(brand)
  }
}

class Audiences extends Component {
  
  constructor(props) {
    super(props)
    
    // Elements
    this.head = null

    // Store elements
    this.state = {
      items: categories,
      inputValue: '',
      categoryArrays,
      selectedCategory: '',
      brands
    }
  }

  componentDidMount() {
    const tl = new TimelineMax()
    const head = this.head
    tl.to(head, .5, {autoAlpha:0, ease:'Power1.easeOut'}, '3')
    tl.to(head, .5, {autoAlpha:1, ease:'Power1.easeOut'}, '5')

    // this.tl.to(head, 1, {autoAlpha:0, ease:'Power1.easeOut'}, '0')
  }

  onSearchHandle = (e) => {
    e.preventDefault()
    const inputValue = e.target.value
    this.setState({ inputValue })
  }

  onPickHandle = (value) => {
    const selectedCategory = value.target.getAttribute('data-id')
    this.setState({ selectedCategory })
    document.querySelector('body').classList.remove('modal-open')
  }

  onClearCategory = () => {
    this.setState({selectedCategory: ''})
    document.querySelector('body').classList.add('modal-open')
  }

  render() {
    const filteredCategories = this.state.items.filter(item => {
      return item.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })

    const categoryArray = data.filter(item => {
      return item.CATEGORY.toLowerCase() === this.state.selectedCategory.toLowerCase() 
    })

    // const mapResults = data.filter(item => {
    //   const searchParam = this.state.inputValue.toLowerCase()
    //   if (item.BRAND.toLowerCase().includes(searchParam) || item.CATEGORY.toLowerCase().includes(searchParam)) {
    //     return item.CATEGORY.toLowerCase()
    //   } else {
    //     return null
    //   }
    // })

    // const filterResults = []
    // for (let i = 0; i < mapResults.length; i++) {
    //   if (!filterResults.includes(mapResults[i].CATEGORY)) {
    //     filterResults.push(mapResults[i].CATEGORY)
    //   }
    // }

    return (
      <div>
        <Header />
        <div className="container">
          <h1 ref={ h1 => this.head = h1 }>SNAKK Audiences</h1>
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