class Book {
    constructor(bookObj) {
        this.title = bookObj.title
        this.pages = bookObj.pages
        Book.all.push(this);
    }

    renderSingleBook() {
        return `<p class="book" id=${this.id}>${this.title} — ${this.pages}</p>`
    }
}

Book.all = []