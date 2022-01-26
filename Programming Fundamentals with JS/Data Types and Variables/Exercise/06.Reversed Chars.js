function reversedCharacters(char1, char2, char3) {
    let result = char1 + " " + char2 + " " + char3;
    let reversed = result.split(``).reverse().join(``);
    console.log(reversed);
}
