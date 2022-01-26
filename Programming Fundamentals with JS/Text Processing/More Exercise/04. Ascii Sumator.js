function solve(arr) {
    let char1 = arr.shift().charCodeAt();
    let char2 = arr.shift().charCodeAt();
    let text = arr.shift();
    result = 0;

    for (let char of text) {
        char = char.charCodeAt();
        if ((char > char1 && char < char2) || (char < char1 && char > char2)) {
            result += char;
        }
    }
    console.log(result)
}

solve(["a",
"1",
"jfe392$#@j24ui9ne#@$"]


)