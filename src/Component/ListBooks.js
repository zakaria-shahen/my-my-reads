import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

import Books from './Books'

const ListBooks = props => {

    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            {
                Object.keys(props.books).map(key =>
                (<Books key={key}
                    data={props.books[key]}
                    changeCategory={{set: props.changeCategory}}
                    category={key} />)
                )
            }

            <div className="open-search">
                <Link to='/search'><button>Add a book</button></Link>
            </div>
        </div>

    )
}

export default ListBooks

ListBooks.propTypes = {
    books: PropTypes.object.isRequired,
    changeCategory: PropTypes.func.isRequired
}