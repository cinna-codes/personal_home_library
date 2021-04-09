const rootEl = document.getElementById('root')
const headerHome = document.getElementById('headerHome')
const headerBooks = document.getElementById('headerBooks')
const headerAuthors = document.getElementById('headerAuthors')

const newAuthorForm = `<b>New Author</b>
<form id="author_form">
<label>Name:</label><br>
<input type="text" id="name"><br>
<label>Bio:</label><br>
<input type="text" id="bio">
<p><input type="submit" value="Submit"></p>
</form>`

const newBookForm = `<b>New Book</b>
<form id="book_form">
<label>Title:</label><br>
<input type="text" id="title"><br>
<label>Page count:</label><br>
<input type="text" id="pages">
<p><input type="submit" value="Submit"></p>
</form>`

// books index
const showBooks = function() {
    Book.all.forEach(book => {
        rootEl.innerHTML += book.renderSingleBook()
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
    
    const books = Book.all.filter(book => {
        return book.author_id === parseInt(id)
    })
    rootEl.innerHTML += `<ul></ul>`

    books.forEach(book => {
        document.querySelector("ul").innerHTML += `<li>${book.renderSingleBook()}</li>`
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
            
            rootEl.innerHTML += newAuthorForm
            document.getElementById("author_form").addEventListener("submit", function (e) {
                e.preventDefault()
                const authorObj = {name: author_form.name.value, bio: author_form.bio.value}
                createNewAuthor(authorObj)
            })
            document.querySelectorAll(".author").forEach(singleAuthor => singleAuthor.addEventListener("click", showSingleAuthor))
        })
    }
// authors index

// home 

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
    rootEl.innerHTML += `<p>Welcome to your personalized home library! You can keep track of what books you own and by what authors by navigating to the "Books" and "Authors" tabs.</p>`
}
// home

const clearRootEl = function() {
    rootEl.innerHTML = ``
}
headerHome.addEventListener("click", clearRootEl)
headerHome.addEventListener("click", showHome)
headerAuthors.addEventListener("click", clearRootEl)
headerAuthors.addEventListener("click", showAuthors)

function fetchAllBooks() {
    fetch(`http://localhost:3000/books`)
    .then((res) => res.json())
    .then((books) => {
        books.forEach(bookObj => {
            const newBook = new Book(bookObj)
            // rootEl.innerHTML += newBook.renderSingleBook()
        })
        headerBooks.addEventListener("click", clearRootEl)
        headerBooks.addEventListener("click", showBooks)
    })
}

fetchAllBooks()