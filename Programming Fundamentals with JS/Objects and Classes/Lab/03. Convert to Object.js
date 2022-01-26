function convertJSONToObject(text) {
    let toObj = JSON.parse(text);
    
    for (let [key, value] of Object.entries(toObj)) {
        console.log(`${key}: ${value}`)
    }
}

convertJSONToObject('{"name": "George", "age": 40, "town": "Sofia"}')