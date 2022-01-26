function solve(arr) {
    let keySequance = arr.shift().split(` `);
    let index = 0;
    let result = [];

    for (let element of arr) {
        if (element !== `find`) {
            let elementArray = element.split(``);
            for (let char of elementArray) {
                if (index === keySequance.length) {
                    index = 0;
                }
                let numberFromChar = char.charCodeAt();
                let temp = numberFromChar - keySequance[index];
                index++;
                let newElement = String.fromCharCode(temp);
                result.push(newElement);
            }
            let startIndex = result.indexOf(`&`);
            let sliceFromFirstIndex = result.slice(startIndex + 1); 
            let endIndex = sliceFromFirstIndex.indexOf(`&`) + startIndex + 1;
            let type = result.slice(startIndex + 1, endIndex).join(``);
            startIndex = result.indexOf(`<`);
            endIndex = result.indexOf(`>`);
            let coordinates = result.slice(startIndex + 1, endIndex).join(``);
            console.log(`Found ${type} at ${coordinates}`)
            index = 0;
            result = [];
        } else {
            break;
        }
    }
}

solve(["1 2 1 3",
"ikegfp'jpne)bv=41P83X@",
"ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
"find"]

)