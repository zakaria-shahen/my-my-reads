import React, { Component } from "react"
import { get } from './BooksAPI'

class Book extends Component {
    state = {}
    getDate = bookId => {
        return get(bookId).then(data => this.setState({ book: data }))
    }

    componentDidMount() {
        if (typeof this.props.book === 'string') {

            this.getDate(this.props.bookId)
            return
        } else {

            this.setState({book: this.props.book})
        }

    }
    render() {
        return (
            <React.Fragment>
                {
                    this.state.book && (
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.state.book.hasOwnProperty('imageLinks') && this.state.book.imageLinks.hasOwnProperty('thumbnail') && this.state.book.imageLinks.thumbnail })`}}></div>
                                <div className="book-shelf-changer">
                                    <select id={this.props.bookId} value={this.state.book.shelf? this.state.book.shelf : 'none' } onChange={this.props.changeCategory.set}>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading" >Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{this.state.book.title}</div>
                            <div className="book-authors">{this.state.book.authors && this.state.book.authors.toString(' ,')}</div>
                        </div>
                    )
                }
            </React.Fragment>
        )
    }

}

export default Book