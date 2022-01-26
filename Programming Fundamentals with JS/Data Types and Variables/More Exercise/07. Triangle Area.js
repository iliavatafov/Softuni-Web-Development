function triangleArea(A, B, C) {

    let S = (A + B + C) / 2;

    let area = Math.sqrt((S) * (S - A) * (S - B) * (S - C));

    console.log(area);
}