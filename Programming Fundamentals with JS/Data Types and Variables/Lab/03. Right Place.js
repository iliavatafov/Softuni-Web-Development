function rightPlace(string, char, string1){

    let currentChar = "";
    let print = string.replace("_", char)    
    let output = string1 === print ? `Matched` : `Not Matched`;
    console.log(output);
}

rightPlace('Str_ng', 'I', 'Strong')
rightPlace('Str_ng', 'i', 'String')