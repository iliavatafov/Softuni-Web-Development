function solve(arr) {

    let bookKeeper = {};

    for (let element of arr) {
        if (element.includes(`->`)) {
            let [shelfId, shelfGenre] = element.split(` -> `);
            let check = false;
            if (!bookKeeper.hasOwnProperty(shelfGenre)) {
                let arraysOfBookKeeper = Object.values(bookKeeper);
                for (let el of arraysOfBookKeeper) {
                    if (el.shelfId === shelfId) {
                        check = true;
                    }
                }
                if (!check) {
                    let shelfName = `${shelfId} ${shelfGenre}`
                    bookKeeper[shelfGenre] = {
                        shelfId: shelfId,
                    };
                }
            }
        } else if (element.includes(`:`)) {
            element = element.split(`: `);
            let bookTitle = element.shift();
            element = element[0].split(`, `)
            let bookAutor = element.shift();
            let bookGanre = element[0]
            for (let [ganre, shelf] of Object.entries(bookKeeper)) {
                if (bookGanre === ganre) {
                    bookKeeper[ganre][bookAutor] = bookTitle
                }
            }
        }
    }
    for (let [key, value] of Object.entries(bookKeeper)) {
        let totalBooks = Object.values(value).length - 1;
        bookKeeper[key].totalBooks = totalBooks;
    }
    let sortedBooks = Object.entries(bookKeeper).sort((a, b) => b[1].totalBooks - a[1].totalBooks);
    for (let element of sortedBooks) {
        console.log(`${element[1].shelfId} ${element[0]}: ${element[1].totalBooks}`);
        let books = Object.entries(element[1]);
        for (let book = 1; book < books.length - 1; book++) {
            console.log(`--> ${books[book][1]}: ${books[book][0]}`);
        }
    }
}