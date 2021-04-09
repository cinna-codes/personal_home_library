class Book {
    constructor(bookObj) {
        this.title = bookObj.title
        this.pages = bookObj.pages
        this.author_name = bookObj.author_name
        Book.all.push(this);
    }

    renderSingleBook() {
        return `<p class="book" id=${this.id}>${this.title} — ${this.pages} — ${this.author_name}</p>`
    }
}

Book.all = []