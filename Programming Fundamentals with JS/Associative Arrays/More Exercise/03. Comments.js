function solve(arr) {
    let listOfUsers = {};
    let listOfArticles = {};
    for (let element of arr) {
        if (element.includes(`user `)) {
            let userName = element.split(` `).pop();
            listOfUsers[userName] = {};
        } else if (element.includes(`article `)) {
            element = element.split(` `);
            let command = element.shift();
            let articleName = element.join(` `);
            listOfArticles[articleName] = {};
        } else if (element.includes(` posts on `)) {
            element = element.split(` posts on `);
            let userName = element.shift();
            element = element[0].split(`: `)
            let articleName = element.shift();
            element = element[0].split(`, `);
            let title = element.shift();
            let comment = element.shift();
            if (listOfUsers.hasOwnProperty(userName) && listOfArticles.hasOwnProperty(articleName)) {
                if (listOfArticles[articleName].hasOwnProperty(userName)) {
                    listOfArticles[articleName][userName].concat(`${title} - ${comment}`)
                } else {
                    listOfArticles[articleName][userName] = `${title} - ${comment}`;
                }                
            }
        }
    }
    let sortedByCountOfComments = Object.entries(listOfArticles)
        .sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length)
    for (let element of sortedByCountOfComments) {
        let articleName = element.shift();
        console.log(`Comments on ${articleName}`)
        Object.entries(element[0])
            .sort((a, b) => a[0].localeCompare(b[0]))
            .forEach(x => console.log(`--- From user ${x[0]}: ${x[1]}`))
    }

}

solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'auser uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'someUser posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much'])