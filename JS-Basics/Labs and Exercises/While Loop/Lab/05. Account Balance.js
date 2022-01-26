function accountBanalance(input){

    let index = 0;

    let depostiAmount = input[index];
    index++;

    let total = 0;

    while(depostiAmount !== "NoMoreMoney"){
        let deposti = Number(depostiAmount);
        if(deposti < 0){
            console.log("Invalid operation!")
            break;
        }
        console.log(`Increase: ${deposti.toFixed(2)}`);
        total += deposti;
        depostiAmount = input[index];
        index++;        
    }
    console.log(`Total: ${total.toFixed(2)}`);
}

