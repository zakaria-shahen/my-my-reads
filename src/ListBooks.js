import React from "react"
import { Link } from "react-router-dom"

import Books from './Books'

const ListBooks = props => {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <Books data={props.books.filter((book) => book.category === 'currentlyReading')}
                        changeCategory={props.changeCategory}
                        category={"Currently Reading"} />
                </div>
            </div>
            <div className="list-books-content">
                <div>
                    <Books data={props.books.filter((book) => book.category === 'wantToRead')}
                        changeCategory={props.changeCategory}
                        category={"Want to Reading"} />
                </div>
            </div>
            <div className="list-books-content">
                <div>
                    <Books data={props.books.filter((book) => book.category === 'read')}
                        changeCategory={props.changeCategory}
                        category={" read "} />
                </div>
            </div>
            <div className="open-search">
                <Link to='/'><button>Add a book</button></Link>
            </div>
        </div>

    )
}

export default ListBooks