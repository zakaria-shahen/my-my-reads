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

## File Schema
```bash
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
