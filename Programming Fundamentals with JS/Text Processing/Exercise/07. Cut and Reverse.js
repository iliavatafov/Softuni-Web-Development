function solve(text) {

    let eachTextLength = text.length / 2;

    let firstText = text.slice(0, eachTextLength).split(``).reverse().join(``);
    let secondText = text.slice(eachTextLength).split(``).reverse().join(``);

    console.log(firstText);
    console.log(secondText);
    

}