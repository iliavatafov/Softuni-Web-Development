class LibraryCollection {
    constructor(capacity) {
        this.capacity = Number(capacity);
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length === this.capacity) {
            throw new Error(`Not enough space in the collection.`);
        } else {
            this.books.push({ bookName, bookAuthor, payed: false });
        }

        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }

    payBook(bookName) {

        const availableBook = this.books.find(book => book.bookName === bookName);

        if (availableBook === undefined) {
            throw new Error(`${bookName} is not in the collection.`);
        }

        this.books.forEach(book => {
            if (book.payed === true) {
                throw new Error(`${bookName} has already been paid.`);
            }
        });

        this.books.forEach(book => {
            if (book.bookName === bookName) {
                book.payed = true;
            }
        });

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {

        const availableBook = this.books.find(book => book.bookName === bookName);

        if (availableBook === undefined) {
            throw new Error(`The book, you're looking for, is not found.`);
        }

        if (availableBook.payed === false) {
            throw new Error(`${bookName} need to be paid before removing from the collection.`);
        }

        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookName === bookName) {
                this.books.splice(i, 1);
            }
        }

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {

            let result = [];

            if (bookAuthor === undefined) {
                result.push(`The book collection has ${this.capacity - this.books.length} empty spots left.`);
                this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));
                this.books.forEach(book => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? `Has Paid` : `Not Paid`}.`));
            } else {
                const booksFromTheAuthor = this.books.filter(book => book.bookAuthor === bookAuthor);
                if(booksFromTheAuthor.length > 0) {
                    booksFromTheAuthor.forEach(book => result.push(`${book.bookName} == ${book.bookAuthor} - ${book.payed ? `Has Paid` : `Not Paid`}.`));
                } else {
                    throw new Error(`${bookAuthor} is not in the collection.`);
                }
            }

            return result.join(`\n`);
    }
}