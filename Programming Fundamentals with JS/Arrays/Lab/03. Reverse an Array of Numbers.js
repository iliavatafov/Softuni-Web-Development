function reverseAnArrayOfNums(n, array) {

  let arrayOne = [];

  for (let i = n - 1; i >= 0; i--) {
    arrayOne.push(array[i]);
  }
  console.log(arrayOne.join(" "));
}
