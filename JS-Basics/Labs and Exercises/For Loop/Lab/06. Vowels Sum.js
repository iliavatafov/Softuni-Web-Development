function sumOfChars(input){

    let word = input[0];
    let number = 0;

    for( let i = 0; i <= word.length; i++){
        if(word[i] == "a"){
            number += 1;
        }
        else if(word[i] == "e"){
            number += 2;
        }
        else if(word[i] == "i"){
            number += 3;
        }
        else if(word[i] == "o"){
            number += 4;
        }
        else if(word[i] == "u"){
            number += 5;
        }        
    }
    console.log(number);
}