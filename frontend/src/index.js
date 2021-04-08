const rootEl = document.getElementById('root')
const headerHome = document.getElementById('headerHome')
const headerBooks = document.getElementById('headerBooks')
const headerAuthors = document.getElementById('headerAuthors')

// const testTwo = function(e) {

// }
const test = function(e) {
    console.log(e.target)
    //e.addEventListener("click", testTwo)
}

// books index
const showBooks = function() {
    fetch(`http://localhost:3000/books`)
    .then((res) => res.json())
    .then((books) => renderBooks(books))
    const renderBooks = function(books) {
        console.log(books)
        books.forEach(book => {
            rootEl.innerHTML += `<p class="book" id=${book.id}>${book.title} — ${book.pages}</p>`
        })
    }
}
    // document.querySelectorAll(".book").forEach(book => {
    //     book.addEventListener("click", test)
    // })

    // const renderBookOnIndex = function(book) {
    //     rootEl.innerHTML += `<p class="book" id=${book.id}><i>${book.title}</i> — ${book.author_name}</p>`
    //     document.getElementById(book.id).addEventListener("click", test)
    // }


// books index

// books show
    // fetch request
    // rootEl.innerHTML = ``
    // rootEl.innerHTML += `<p>book title</p> <p>book author_name</p> <p>book summary</p>`
// books show

// authors index
    // fetch request
    // clear rootEl (has to come BEFORE iterating)
    // iterate over authors
        // rootEl.innerHTML += `<p>author name</p>`

    const showAuthors = function() {
    fetch("http://localhost:3000/authors")
    .then((res) => res.json())
    .then((authors) => renderAuthors(authors))
    
        const renderAuthors = function(authors) {
            console.log(authors)
            authors.forEach(author => {
                rootEl.innerHTML += `<p class="author" id=${author.id}>${author.name}</p>`
            })
        }
    }
// authors index

// authors show
    // fetch request 
    // clear rootEl
    // rootEl.innerHTML += `<p>author name</p> <p>author bio</p>`
    // iterate over author's books
    // rootEl.innerHTML += `<p>book title, book pagecount</p>`
// authors show

// home 
const newAuthor = `<form id="author_form">
<label>Name:</label><br>
<input type="text" id="name" value="Name"><br>
<label>Bio:</label><br>
<input type="text" id="bio" value="Bio"><br>
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
        rootEl.innerHTML += `<p class="author" id=${newAuthor.id}>${newAuthor.name}</p> <p>${newAuthor.bio}</p>` // renderSingleAuthor()
        })
      }
// authors new

// books new
    const newBook = `<form id="book_form">
    <label>Title:</label><br>
    <input type="text" id="title" value="Title"><br>
    <label>Page count:</label><br>
    <input type="text" id="pages" value="Page count"><br>
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
        rootEl.innerHTML += `<p class="book" id=${book.id}>${newBook.title}</p> — <p>${newBook.pages}</p>`
        })
      }
// books new

const showHome = function() {
    rootEl.innerHTML += newAuthor
    rootEl.innerHTML += newBook
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