class Author {
    constructor(authorObj) {
        this.id = authorObj.id
        this.name = authorObj.name
        this.bio = authorObj.bio
        Author.all.push(this)
    }

    renderSingleAuthor() {
        return `<p id=${this.id} class="author">${this.name} <br>
        — ${this.bio}
        </p>`
    }
}

Author.all = []