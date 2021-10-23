import React from "react"
import { Link } from "react-router-dom"

import Books from './Books'

const ListBooks = props => {
    const category = [{ name: 'Currently Reading', id: 'currentlyReading' },
    { name: 'Want to Reading', id: 'wantToRead' },
    { name: 'Read', id: 'read' }]


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {
                category.map((element) => (
                    <Books key={element.id} data={props.books.filter((book) => book.category === element.id )}
                        changeCategory={props.changeCategory}
                        category={element.name} />
                ))
            }

            <div className="open-search">
                <Link to='/'><button>Add a book</button></Link>
            </div>
        </div>

    )
}

export default ListBooks