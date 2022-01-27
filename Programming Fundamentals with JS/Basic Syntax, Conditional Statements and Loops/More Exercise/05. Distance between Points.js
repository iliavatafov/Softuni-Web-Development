function distanceBetweenPoints(x1, y1, x2, y2) {

        let P = Math.pow(x2 - x1, 2);
        let Q = Math.pow(y2 - y1, 2);
        let dPQ = Math.sqrt(P + Q);
        console.log(dPQ);
}
