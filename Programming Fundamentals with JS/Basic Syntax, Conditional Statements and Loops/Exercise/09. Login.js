function login(input) {

    let username = input.shift();
    let password = username.split(``).reverse().join(``);

    let currentPass = input.shift();

    let printLine = "";

    let counter = 0;

    while (password !== currentPass) {
        counter++;
        if (counter > 3) {
            console.log(`User ${username} blocked!`);
            return;
        }
        console.log(`Incorrect password. Try again.`);
        currentPass = input.shift();
    }
    console.log(`User ${username} logged in.`)
}