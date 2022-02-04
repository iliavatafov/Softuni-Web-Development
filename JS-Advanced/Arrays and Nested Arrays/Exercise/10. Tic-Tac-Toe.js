function solve(input) {

    let dashboard =
        [[false, false, false],
        [false, false, false],
        [false, false, false]]

        ;

    let firstPlayer = `X`;
    let secondPlayer = `O`;
    let flag = false;

    for (let line = 0; line < input.length; line++) {
        let [row, col] = input[line].split(` `);
        row = Number(row);
        col = Number(col);
        let currentPlayer = ``;
        if (flag) {
            if (line % 2 === 0) {
                currentPlayer = secondPlayer;
            } else {
                currentPlayer = firstPlayer;
            }
        } else {
            if (line % 2 === 0) {
                currentPlayer = firstPlayer;
            } else {
                currentPlayer = secondPlayer;
            }
        }
        let concArr = [];
        for (let element of dashboard) {
            concArr = concArr.concat(element);
        }
        if (!concArr.includes(false)) {
            console.log(`The game ended! Nobody wins :(`);
            dashboard.forEach(x => console.log(x.join(`\t`)));
            return;
        }
        if (dashboard[row][col] !== false) {
            console.log(`This place is already taken. Please choose another!`);
            if (flag) {
                flag = false;
            } else {
                flag = true;
            }
            continue;
        } else {
            dashboard[row][col] = currentPlayer;
        }
        for (let row = 0; row < 3; row++) {
            let rowResult = [];
            let colResult = [];
            for (let col = 0; col < 3; col++) {
                rowResult.push(dashboard[row][col]);
                colResult.push(dashboard[col][row]);
            }
            let verticalOne = [dashboard[0][0], dashboard[1][1], dashboard[2][2]];
            let verticalTwo = [dashboard[0][2], dashboard[1][1], dashboard[2][0]];
            if (allEqual(rowResult) || allEqual(colResult) || allEqual(rowResult) || allEqual(verticalOne) || allEqual(verticalTwo)) {
                console.log(`Player ${currentPlayer} wins!`);
                dashboard.forEach(x => console.log(x.join(`\t`)));
                return;
            }
        }
    }

    dashboard.forEach(x => console.log(x.join(`\t`)));

    function allEqual(arr) {
        return arr.every(x => x === arr[0] && x !== false);
    }
}

solve(["0 0",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]


)