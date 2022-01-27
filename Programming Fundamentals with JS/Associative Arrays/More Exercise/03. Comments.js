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
            .forEach(x => console.log(`--- From user ${x[0]}: ${x[1]}`));
    }
}