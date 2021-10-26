import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import { search } from './BooksAPI'
import Books from './Books'

import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"

// NOTES: The search from BooksAPI is limited to a particular set of search terms.
// You can find these search terms here:
// https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

// However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
// you don't find a specific author or title. Every search is limited by search terms.


const SearchPage = props => {
    const [word, setWord] = useState('')
    // const [book, setBook] = useState({ id: '', title: '', author: '', image: '' })
    const [result, setResult] = useState('')
    const [open, setOpen] = useState(false)
    //  books.industryIdentifiers[0].identifier


    const changeWord = event => setWord(event.target.value)


    useEffect(() => {
        //  if empty variable 
        if (!word) {
            return
        }

        //  Get result
        search(word)
            .then(data => {
                if (Array.isArray(data)) {

                    setResult(data)

                } else {
                    setResult('')
                    handleOpen()
                }

            })
    }, [word])


    //  Alert Error UI 
    const handleClose = () => setOpen(false)
    const handleOpen = () => setOpen(true)

    return (
        <React.Fragment>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/' ><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                            placeholder="Search by title or author"
                            value={word}
                            onChange={changeWord} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
            <div>
                {
                    result &&
                    (<Books data={result}
                        changeCategory={{ set: props.addBook, value: "none" }}
                        category={"result"} />)
                }

                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                        No result was found for the word "{word}"
                    </Alert>
                </Snackbar>
            </div>
        </React.Fragment>
    )
}

export default SearchPage