import React, { Component } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import SearchPage from './Component/SearchPage.js'
import ListBooks from './Component/ListBooks.js'

import { update } from './Component/BooksAPI'


class App extends Component {
  state = {
    showSearchPage: false,
    books: undefined
  }

  changeCategory = event => {
    const value = event.target.options[event.target.options.selectedIndex].value
    const bookId = event.target.id
    update({ id: bookId }, value).then(data => this.setState({ books: data }))

  }

  addBook = event => {
    const bookId = event.target.id
    const shelf = event.target.options[event.target.options.selectedIndex].value
    update({ id: bookId }, shelf).then(data => this.setState({ books: data }))

  }

  componentDidMount() {
    //  Get saved data API
    update({ id: 0 }, "none").then((data) => this.setState({ books: data }))
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Route exact path='/'  >
            {
              this.state.books && (<ListBooks books={this.state.books}
                changeCategory={this.changeCategory} />)
            }
          </Route>
          <Route exact path='/search' >
            <SearchPage savedBooks={this.state.books} addBook={this.addBook} />
          </Route>

        </BrowserRouter>


      </div>
    )
  }
}


export default App
