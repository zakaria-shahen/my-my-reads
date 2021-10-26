import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Alert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar"

import { search } from './BooksAPI'
import Books from './Books'


const SearchPage = props => {
    const [word, setWord] = useState('')
    const [result, setResult] = useState('')
    const [open, setOpen] = useState(false)

    const changeWord = event => setWord(event.target.value)


    useEffect(() => {
        //  if empty variable 
        if (!word) {
            setResult('')
            handleClose()
            return
        }

        //  Get result
        search(word)
            .then(data => {
                if (Array.isArray(data)) {
                    const filterDate = data.filter(book => {
                        const bookID = book.id
                        const keys = Object.keys(props.savedBooks)

                        for (const key of keys) {
                            for (const book of props.savedBooks[key]) {
                                if (book === bookID) {
                                    return false
                                }

                            }
                        }
                        return true

                    })

                    setResult(filterDate)

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