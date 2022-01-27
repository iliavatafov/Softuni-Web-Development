function solve(arr) {
    
    let metals = {};
    for (let i = 0; i < arr.length; i += 2) {
        if (metals.hasOwnProperty([arr[i]])) {
            metals[arr[i]] += Number(arr[i + 1]);
        } else {
            metals[arr[i]] = Number(arr[i + 1]);
        }
    }
    for (let [key, value] of Object.entries(metals)) {
        console.log(`${key} -> ${value}`);
    }
}
