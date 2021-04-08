class Book {
    constructor(bookObj) {
        this.title = bookObj.name
        this.pages = bookObj.bio
        Book.all.push(this);
    }

}

Book.all = []