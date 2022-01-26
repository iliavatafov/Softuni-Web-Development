function movies(arr) {

    let result = [];


    for (let list of arr) {
        let object = {};
        if (list.split(` `)[0] === `addMovie`) {
            list = list.split(` `);
            command = list.shift();
            object.name = list.join(` `);
            result.push(object);
        } else if (list.includes(`directedBy`)) {
            for (let movie of result) {
                let index = list.split(` `).indexOf(`directedBy`);
                let movieName = list.split(` `).slice(0, index);
                let director = list.split(` `).slice(index + 1, list.length);
                director = director.join(` `);
                movieName = movieName.join(` `);
                for (let element of result) {
                    if (movieName === element.name) {
                        element.director = director;
                    }
                }
            }
        } else {
            let index = list.split(` `).indexOf(`onDate`);
            let movieName = list.split(` `).splice(0, index).join(` `);
            let date = list.split(` `).pop();
            for (let el of result) {
                if (movieName === el.name) {
                    el.date = date;
                }
            }
        }
    }
    let final = result.filter(element => element.date && element.director).forEach(el => console.log(JSON.stringify(el)));
}