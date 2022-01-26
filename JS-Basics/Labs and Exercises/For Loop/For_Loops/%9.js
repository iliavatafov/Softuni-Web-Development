function solve(input){

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let result = 0;

    for(let i = num1; i < num2; i++){
        if(i % 9 === 0){
            result += i;
        }
    }
    console.log(`The sum: ${result}`);

    for(let i = num1; i < num2; i++){
        if(i % 9 === 0){
            console.log(i);
        }
    }
}