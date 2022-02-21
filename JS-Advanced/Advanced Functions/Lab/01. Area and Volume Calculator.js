function solve(area, vol, input) {

    let result = [];

    JSON.parse(input)
        .map(x => {
            let obj = {
                area: area.call(x),
                volume: vol.call(x),
            }
            result.push(obj);
        });

    return result;
}


function area() {
    return Math.abs(this.x * this.y);
};

function vol() {
    return Math.abs(this.x * this.y * this.z);
};