import React from 'react'

import Book from './Book'

const Books = props => {
    return (
        <div className="list-books-content">
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{props.category}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {
                                props.data && props.data.map(book => {
                                    const bookId = typeof (book) === 'string' ? book : book.id
                                    return (<li key={bookId}>
                                        <Book bookId={bookId}
                                            book={book}
                                            changeCategory={props.changeCategory} />
                                    </li>)
                                })
                            }


                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Books