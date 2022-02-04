function solve(input) {

    let sorted = input
    .sort((a, b) => a.localeCompare(b))
    .sort((a, b) => a.length - b.length);
    
    console.log(sorted.join(`\n`));
}

solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']


)