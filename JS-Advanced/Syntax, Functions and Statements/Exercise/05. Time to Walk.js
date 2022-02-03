function solve(steps, footprint, speedKmH) {

    let distance = steps * footprint;
    let speed = speedKmH * 1000 / 3600;
    let rest = Math.floor(distance / 500) * 60;
    let time = (distance / speed) + rest;

    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = (time % 60).toFixed(0);
    
    if (hours > 9 && minutes > 9) {
        console.log(`${hours}:${minutes}:${seconds}`);
    } else if (hours < 9 && minutes > 9) {
        console.log(`0${hours}:${minutes}:${seconds}`);
    } else if (hours > 9 && minutes < 9) {
        console.log(`${hours}:0${minutes}:${seconds}`);
    } else {
        console.log(`0${hours}:0${minutes}:${seconds}`);
    }
}

solve(1000, 0.70, 5.5)