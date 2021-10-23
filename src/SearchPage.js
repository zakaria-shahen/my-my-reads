import React, { useState } from "react"
import { Link } from "react-router-dom"

import search from './BooksAPI'
import Books from './Books'

// NOTES: The search from BooksAPI is limited to a particular set of search terms.
// You can find these search terms here:
// https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

// However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
// you don't find a specific author or title. Every search is limited by search terms.


const SearchPage = props => {
    const [search, setSearch] = useState('')
    const [book, setBook] = useState({ id: '', title: '', author: '', image: '' })
    const [result, setResult] = useState([])

    //  books.industryIdentifiers[0].identifier

    const changeSearch = event => {
        const query = event.target.value
        setSearch(query)

        //  API 
        const data = search(query)

        // check data 

        // Show data
        setResult(data)


    }

    const addBook = id => {

    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link path='/' ><button className="close-search">Close</button></Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" />

                    {/* 
                        data && data.map((book) => {
                            <Books key={book.id} data={books}
                                changeCategory={addBook}
                                category={book.name} />
                     */}


                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid"></ol>
            </div>
        </div>

    )
}

export default SearchPage