function figures(input){

let figureType = input[0];

let area = 0;

if(figureType == "square"){
    let lenghtSide = Number(input[1]);

    area = lenghtSide * lenghtSide;
}
else if(figureType == "triangle"){
    let lenghtSide = Number(input[1]);
    let lenghtHight = Number(input[2]);

    area = lenghtSide * lenghtHight / 2;
}
else if(figureType == "rectangle"){
    let lenghtSideA = Number(input[1]);
    let lenghtSideB = Number(input[2]);

    area = lenghtSideA * lenghtSideB;
}
else if(figureType == "circle"){
    let radius = Number(input[1]);

    area = Math.PI * (radius * radius);
}

console.log(area);

}

figures([`rectangle`, 7, 2.5]);