function arrayModifire(arr) {

    let result = arr.shift().split(` `).map(x => Number(x));
    let command = ``;
    let index = 0;
    let flag = false;

    while (!flag) {
        let tempArr = arr[index].split(` `);
        let [command, firstIndex, SecondIndex] = tempArr;

        if (command === `end`) {
            flag = true;
            break;
        }

        switch (command) {
            case `swap`:
                let replace1 = result[firstIndex];
                let replace2 = result[SecondIndex];
                result[firstIndex] = replace2;
                result[SecondIndex] = replace1;
                break;
            case `multiply`:
                result[firstIndex] *= result[SecondIndex];
                break;
            case `decrease`:
                result = result.map(x => x - 1);
                break;
        }

        index++;
    }
    console.log(result.join(`, `))
}

arrayModifire([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  
)