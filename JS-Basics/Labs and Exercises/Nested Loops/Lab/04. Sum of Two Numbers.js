function solve(input) {

    let startNum = input.shift();
    let endNum = input.shift();
    let megicNum = input.shift();
    let counter = 0;
    let flag = false;

    for (let i = startNum; i <= endNum; i++) {

        for (let j = startNum; j <= endNum; j++) {
            let sum = Number(i) + Number(j);
            counter++;

            if (sum == megicNum) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${megicNum})`);
                flag = true;
                break;
            }
        }
        if (flag) {
            break;
        }
    }
    if (flag == false) {
        console.log(`${counter} combinations - neither equals ${megicNum}`);
    }
}



