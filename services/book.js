const fs = require("fs")

function getAllBooks(){
    return JSON.parse( fs.readFileSync("books.json") )
}

function getBookById(id){
    const books = JSON.parse( fs.readFileSync("books.json") )

    const filteredBooks = books.filter( book => book.id == id )[0]
    return filteredBooks
}

module.exports = {
    getAllBooks,
    getBookById
}