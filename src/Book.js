import React from "react"

const Book = props => {
    return (<div className="book">
        <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${props.data.image})` }}></div>
            <div className="book-shelf-changer">
                <select id={props.data.id} value={props.data.category} onChange={props.changeCategory}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading" >Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        </div>
        <div className="book-title">{props.data.title}</div>
        <div className="book-authors">{props.data.author}</div>
    </div>)
}

export default Book