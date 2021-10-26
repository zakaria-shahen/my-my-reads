# MyReads Project
Through this application you can
- Find books
- Add a book to your current reading list
- Add books to your next reading list
- Add books to the read list
  Move books from one list to another or delete books from the list

This is the first application after a week or two of learning ReactJS (classes, Hook) ✌️

## Usage

To run the application

* install all project dependencies with `npm install`
* start the app with `npm start`

When searching for books, please use one of the words saved in a file [SEARCH_TERMS.md](SEARCH_TERMS.md)

### website structure
-  App.js
   -  ListBooks.js `\`
      -  Books.js
         -  Book.js
   -  SearchPage.js `\search`
      -   Books.jsSearchPage
          -   Book.js

## File Schema
```bash
├── SEARCH_TERMS.md # Search words available for use.
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src
    ├── App.css 
    ├── App.js 
    ├── Component
    │   ├── Book.js # Show Book 
    │   ├── Books.js # To display one or more books of the Book.js component.
    |   ├── ListBooks.js # To view a collection of books.
    |   ├── SearchPage.js # Searching for books.
    |   └── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css 
    └── index.js
```

