function solve(arr) {
    let serilizeList = {};
    let result = [];

    for (let element of arr) {
        element = element.split(`:`);
        let char = element.shift();
        if(char === `end`) {
            break;
        }
        let arrayOfIndexes = element[0].split(`/`);
        for (let i = 0; i < arrayOfIndexes.length; i++) {
            if (!serilizeList.hasOwnProperty(arrayOfIndexes[i])) {
                serilizeList[arrayOfIndexes[i]] = [];
                serilizeList[arrayOfIndexes[i]] = char;
            } else {
                serilizeList[arrayOfIndexes[i]] = char;
            }
        }
    }
    let arrayFormSerilizeList = Object.entries(serilizeList);
    arrayFormSerilizeList.forEach(x => result.push(x[1]));
    console.log(result.join(``));
}

solve(["a:0/3/5/11",
"v:1/4",
"j:2",
"m:6/9/15",
"s:7/13",
"d:8/14",
"c:10",
"l:12",
"end"]
)