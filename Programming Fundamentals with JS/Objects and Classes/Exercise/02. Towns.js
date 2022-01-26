function towns(arr) {

    for (let element of arr) {
        let [town, latitude, longitude] = element.split(` | `);
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        let newTown = { town, latitude, longitude };
        console.log(newTown);
    }
}