function tseamAccount(arr) {

    let listOfGame = arr.shift().toString().split(` `)

    for (i = 0; i < arr.length; i++) {
        let currentArray = arr[i].split(` `)
        let operation = currentArray[0];
        let currentGame = currentArray[1];

        switch (operation) {
            case `Install`:
                for (j = 0; j < listOfGame.length; j++) {
                    if (listOfGame[j] === currentGame) {
                        break;
                    } else if (j === listOfGame.length - 1) {
                        listOfGame.push(currentGame);
                    }
                }
                break;
            case `Uninstall`:
                for (k = 0; k < listOfGame.length; k++) {
                    if (listOfGame[k] === currentGame) {
                        listOfGame.splice(k, 1);
                        break;
                    }
                }
                break;
            case `Update`:
                for (l = 0; l < listOfGame.length; l++) {
                    if (listOfGame[l] === currentGame) {
                        listOfGame.splice(l, 1);
                        listOfGame.push(currentGame);
                        break;
                    }
                }
                break;
            case `Expansion`:
                for (l = 0; l < listOfGame.length; l++) {
                    let expansionGame = currentGame.split(`-`);
                    if (listOfGame[l] === expansionGame[0]) {
                        listOfGame.splice(l + 1, 0, `${expansionGame[0]}:${expansionGame[1]}`);
                        break;
                    }
                }
                break;
            case `Play`:
                console.log(listOfGame);
                break;
        }
    }
    console.log(listOfGame.join(` `));
}


