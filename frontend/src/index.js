const rootEl = document.getElementById('root')
const headerHome = document.getElementById('headerHome')
const headerBooks = document.getElementById('headerBooks')
const headerAuthors = document.getElementById('headerAuthors')

// books index
const showBooks = function() {
    console.log("Boop")
    fetch("http://localhost:3000/books")
    .then((res) => res.json())
    .then((books) => renderBooks(books))
    
    const renderBooks = function(books) {
        console.log(books)
        books.forEach(book => {
            rootEl.innerHTML += `<p><i>${book.title}</i> — ${book.author_name}</p>`
        })
    }
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
// authors index

// authors show
    // fetch request 
    // clear rootEl
    // rootEl.innerHTML += `<p>author name</p> <p>author bio</p>`
    // iterate over author's books
    // rootEl.innerHTML += `<p>book title, book pagecount</p>`
// authors show

// home 
    // clear rootEl
    // rootEl.innerHTML += `New Book` give id
    // rootEl.innerHTML += `New Author` give id
    // addEventListener to both
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
// headerHome.addEventListener("click", clearRootEl)
// headerHome.addEventListener("click", showHome)
headerBooks.addEventListener("click", clearRootEl)
headerBooks.addEventListener("click", showBooks)
// headerAuthors.addEventListener("click", clearRootEl)
// headerAuthors.addEventListener("click", showAuthors)