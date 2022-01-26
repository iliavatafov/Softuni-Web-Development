function readText(input){

    let index = 0;
    let currentName = input[index];
    index++

    while(currentName !== "Stop"){
        console.log(currentName);
        currentName = input[index];        
        index++;
    }
}

