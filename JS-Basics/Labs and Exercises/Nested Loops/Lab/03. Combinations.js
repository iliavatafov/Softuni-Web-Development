function solve(input){

    let inputNumber = input.shift();
    
    let counter = 0;
    
    for(let i = 0; i <= inputNumber; i++){
        for(let j = 0; j <= inputNumber; j++){
            for(let k = 0; k <= inputNumber; k++){
                let sum = i + j + k;
                if(sum == inputNumber){
                    counter++;
                }
            }        
        }
    }
    console.log(counter);
}