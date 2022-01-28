function solve(arr) {
    let text = arr[0];
    let serililizedList = {}

    let arrayFromText = text.split(``);

    for (let index = 0; index < arrayFromText.length; index++) {
        if (!serililizedList.hasOwnProperty(arrayFromText[index])) {
            serililizedList[arrayFromText[index]] = [];
            serililizedList[arrayFromText[index]].push(index);
        } else {
            serililizedList[arrayFromText[index]].push(index);
        }
    }
    let entriesFromList = Object.entries(serililizedList);
    entriesFromList.forEach(x => console.log(`${x[0]}:${x[1].join(`/`)}`));
}