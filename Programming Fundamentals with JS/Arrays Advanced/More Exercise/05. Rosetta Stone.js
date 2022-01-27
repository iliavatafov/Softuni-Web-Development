function rosettaStone(arr) {

    let lines = Number(arr.shift());
    let decoder = arr.slice(0, 2).map(row => row.split(' ').map(x => Number(x)));
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)));
    matrix.splice(0, lines);

    let matrixRows = matrix.length;
    let matrixColumns = matrixRows;

    let result = [];

    for (let i = 0; i < matrixRows; i++) {
        for (let row = 0; row < lines; row++) {
            for (let col = 0; col < lines; col++) {
                let sum = matrix[row][col] + decoder[row][col];
                matrix[row][col]
            }
            i++;
        }
    }
}