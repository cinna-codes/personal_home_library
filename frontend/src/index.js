const rootEl = document.getElementById('root')
const headerHome = document.getElementById('headerHome')
const headerBooks = document.getElementById('headerBooks')
const headerAuthors = document.getElementById('headerAuthors')

// books index
const showBooks = function() {
    fetch(`http://localhost:3000/books`)
    .then((res) => res.json())
    .then((books) => {
        books.forEach(bookObj => {
            const newBook = new Book(bookObj)
            rootEl.innerHTML += newBook.renderSingleBook()
        })
    })
}
// books index

const showSingleAuthor = function(e) {
    console.log(e.target)
    const id = e.target.id
    clearRootEl()
    fetch(`http://localhost:3000/authors/${id}`)
        .then((res) => res.json())
        .then(author => {
            const newAuthor = new Author(author)
            rootEl.innerHTML += newAuthor.renderSingleAuthor()
        })

    fetch(`http://localhost:3000/authors/${id}/books`)
    .then((res) => res.json())
    .then((books) => {
        rootEl.innerHTML += `<ul></ul>`

        books.forEach(bookObj => {
            const newBook = new Book(bookObj)
            document.querySelector("ul").innerHTML += `<li>${newBook.renderSingleBook()}</li>`
        })
    })
}

// authors index
    const showAuthors = function() {
        fetch("http://localhost:3000/authors")
        .then((res) => res.json())
        .then((authors) => {
            authors.forEach(authorObj => {
                const newAuthor = new Author(authorObj)
                rootEl.innerHTML += newAuthor.renderSingleAuthor()
            })
            document.querySelectorAll(".author").forEach(singleAuthor => singleAuthor.addEventListener("click", showSingleAuthor))
        })
    }
// authors index

// home 
    const newAuthorForm = `<form id="author_form">
    <label>Name:</label><br>
    <input type="text" id="name"><br>
    <label>Bio:</label><br>
    <input type="text" id="bio"><br>
    <input type="submit" value="Submit">
    </form>`

// authors new
    function createNewAuthor(authorObj) {
        fetch(`http://localhost:3000/authors`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(authorObj)
        })
        .then((res) => res.json())
        .then((author) => {
        const newAuthor = new Author(author)
        rootEl.innerHTML += newAuthor.renderSingleAuthor()
        })
      }
// authors new

// books new
    const newBookForm = `<form id="book_form">
    <label>Title:</label><br>
    <input type="text" id="title"><br>
    <label>Page count:</label><br>
    <input type="text" id="pages"><br>
    <input type="submit" value="Submit">
    </form>`

    function createNewBook(bookObj) {
        fetch(`http://localhost:3000/books`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(bookObj)
        })
        .then((res) => res.json())
        .then((book) => {
        const newBook = new Book(book)
        rootEl.innerHTML += newBook.renderSingleBook()
        })
      }
// books new

const showHome = function() {
    rootEl.innerHTML += newAuthorForm
    rootEl.innerHTML += newBookForm
    document.getElementById("author_form").addEventListener("submit", function (e) {
        e.preventDefault()
        const authorObj = {name: author_form.name.value, bio: author_form.bio.value}
        createNewAuthor(authorObj)
    })
    document.getElementById("book_form").addEventListener("submit", function (e) {
        e.preventDefault()
        const bookObj = {title: book_form.title.value, pages: book_form.pages.value}
        createNewBook(bookObj)
    })
}
// home

const clearRootEl = function() {
    rootEl.innerHTML = ``
}
headerHome.addEventListener("click", clearRootEl)
headerHome.addEventListener("click", showHome)
headerBooks.addEventListener("click", clearRootEl)
headerBooks.addEventListener("click", showBooks)
headerAuthors.addEventListener("click", clearRootEl)
headerAuthors.addEventListener("click", showAuthors)