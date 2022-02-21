function solution(a) {
    return (b) => a + b;
}

let add5 = solution(8);
console.log(add5(2));
console.log(add5(3));