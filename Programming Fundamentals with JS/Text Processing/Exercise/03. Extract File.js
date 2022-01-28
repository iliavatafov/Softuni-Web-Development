function solve(pathToFile) {
    pathToFile = pathToFile.split(`\\`);
    let fileData = pathToFile.pop();
    let countOfDots = 0;
    for (let element of fileData) {
        if (element === `.`) {
            countOfDots++;
        }
    }
    if (countOfDots === 1) {
        fileData = fileData.split(`.`);
        console.log(`File name: ${fileData[0]}`);
        console.log(`File extension: ${fileData[1]}`);
    } else {
        fileData = fileData.split(`.`);
        let extension = fileData.pop();
        console.log(`File name: ${fileData.join(`.`)}`);
        console.log(`File extension: ${extension}`);
    }
}