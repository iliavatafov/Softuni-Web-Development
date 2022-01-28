function convertJSONToObject(text) {
    let toObj = JSON.parse(text);

    for (let [key, value] of Object.entries(toObj)) {
        console.log(`${key}: ${value}`);
    }
}