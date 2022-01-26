function charInRange (firstCharactar, secondCharactar) {

    let min = firstCharactar;
    let max = secondCharactar;

    let firstCharNum = firstCharactar.charCodeAt(0);
    let secondCharNum = secondCharactar.charCodeAt(0);

    if (firstCharNum > secondCharNum) {
        min = secondCharactar;
        max = firstCharactar;
    }
    let result = ``;
    for (let i = min.charCodeAt(0) + 1; i < max.charCodeAt(0); i++) {
        let character = String.fromCharCode(i)
        result += character + ` `;
    }
    return result
}
let result = charInRange('C','#');
console.log(result)

