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
    fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((books) => renderBooks(books))
    
    const renderBooks = function(books) {
        console.log(books)
        books.forEach(book => {
            debugger
            rootEl.innerHTML += `<p class="book" id=${book.id}>${book.title} — ${book.author_name}</p>`
        })
        // document.querySelectorAll(".book").forEach(book => {
        //     book.addEventListener("click", test)
        // })
    }

    // const renderBookOnIndex = function(book) {
    //     rootEl.innerHTML += `<p class="book" id=${book.id}><i>${book.title}</i> — ${book.author_name}</p>`
    //     document.getElementById(book.id).addEventListener("click", test)
    // }
}


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
<input type="text" id="bio" value="Bio"><br><br>
<input type="submit" value="Submit">
</form>`
const showHome = function() {
    rootEl.innerHTML += newAuthor
    document.getElementById("author_form").addEventListener("submit", function (e) {
        e.preventDefault()
    })
}
// home

// books new
    // fetch post request for creating book
// books new

// authors new
    // fetch post request for creating author
// authors new

const clearRootEl = function() {
    rootEl.innerHTML = ``
}
headerHome.addEventListener("click", clearRootEl)
headerHome.addEventListener("click", showHome)
headerBooks.addEventListener("click", clearRootEl)
headerBooks.addEventListener("click", showBooks)
headerAuthors.addEventListener("click", clearRootEl)
headerAuthors.addEventListener("click", showAuthors)