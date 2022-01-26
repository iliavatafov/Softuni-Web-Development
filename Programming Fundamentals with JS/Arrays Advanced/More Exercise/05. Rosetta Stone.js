function rosettaStone(arr) {

    let lines = Number(arr.shift());
    let decoder = arr.slice(0, 2).map(row => row.split(' ').map(x => Number(x)));
    let matrix = arr.map(row => row.split(' ').map(x => Number(x)));
    matrix.splice(0, lines);
    
    let matrixRows = matrix.length;
    let matrixColumns = matrixRows;

    let result = [];

    for (let i = 0; i < matrixRows; i ++) {
        for (let row = 0; row < lines; row++) {
            for (let col = 0; col < lines; col++) {
                let sum = matrix[row][col] + decoder[row][col];
                matrix[row][col]         
            }
            i++;
        }
    }


}

rosettaStone([ '2',
'59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22' ]
)