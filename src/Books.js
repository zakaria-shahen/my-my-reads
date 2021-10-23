import React from 'react'

import Book from './Book'

const Books = props => {
    return (<div className="bookshelf">
        <h2 className="bookshelf-title">{props.category}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.data.map((book) => <li key={book.id}><Book data={book} changeCategory={props.changeCategory} /></li>)
                }

            </ol>
        </div>
    </div>
    )
}


export default Books