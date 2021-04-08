const rootEl = document.getElementById('root')
const headerHome = document.getElementById('headerHome')
const headerBooks = document.getElementById('headerBooks')
const headerAuthors = documet.getElementById('headerAuthors')

fetch("http://localhost:3000/books")
.then((res) => res.json())
.then((books) => renderBooks(books))

const renderBooks = function(books) {
    books.forEach(book => {
        rootEl.innerHTML += `<p>${book.title}</p>`
    })
}