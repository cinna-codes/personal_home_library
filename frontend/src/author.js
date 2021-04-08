class Author {
    constructor(authorObj) {
        this.name = authorObj.name
        this.bio = authorObj.bio
        Author.all.push(this)
    }

    renderSingleAuthor() {
        return `<p>${this.name} <br>
        <i>${this.bio}</i>
        </p>`
    }
}

Author.all = []