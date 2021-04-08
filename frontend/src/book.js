class Book {
    constructor(bookObj) {
        this.title = bookObj.title
        this.pages = bookObj.pages
        Book.all.push(this);
    }

}

Book.all = []