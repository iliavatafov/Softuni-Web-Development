function solve(input) {

    const posswordsCount = Number(input.shift());

    for (let i = 0; i < posswordsCount; i++) {

        let currentPassword = input.shift();

        const pattern = /^(([\w\W]+)>[0-9]{3}[|][a-z]{3}[|][A-Z]{3}[|][^<>]{3}<\2)$/;
        let match = pattern.exec(currentPassword);

        if (match) {
            let temp = currentPassword.split(`>`);
            let encryptedPass = temp[1].split(`<`)[0].split(`|`)
            console.log(`Password: ${encryptedPass.join(``)}`);
        } else {
            console.log(`Try another password!`);
        }
    }
}

solve(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZZZ|123<*"])