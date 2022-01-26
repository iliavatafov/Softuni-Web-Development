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
            console.log(`--> ${books[book][1]}: ${books[book][0]}`)
        }
    }
}

solve(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, sci-fi', 'Pilots of Stone: Brook Jay, history'])