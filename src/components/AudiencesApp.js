import React, { Component } from 'react'

import Categories from './Categories'
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

class Audiences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      items: categories,
      inputValue: ''
    }
  }

  onSearchHandle = (e) => {
    e.preventDefault()
    const inputValue = e.target.value
    this.setState({ inputValue })
  }

  render() {
    
    const filteredCategories = this.state.items.filter(item => {
      return item.toLowerCase().includes(this.state.inputValue.toLowerCase())
    })

    return (
      <div>
        <Header />
        <div className="container">
          <h1>Snakk Audiences</h1>
          <p>AUS Segment Taxonomy</p>
          <Search searchChange={this.onSearchHandle} inputValue={this.state.inputValue}/>
          <Categories categories={filteredCategories} />
        </div>
      </div>
    )
  }
}

export default Audiences