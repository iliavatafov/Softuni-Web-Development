function cone(radius, height) {

    let V = Math.PI * Math.pow(radius, 2) * height / 3;
    console.log(`volume = ${V.toFixed(4)}`);
    let A = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));
    console.log(`area = ${A.toFixed(4)}`);
}