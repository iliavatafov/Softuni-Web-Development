function solve(input) {

    let result = [];

    let obj = {
        add(str) {
            result.push(str);
        },
        remove(str) {
            result = result.filter(x => x != str);
        },
        print() {
            console.log(result.join(`,`));
        },
    }

    input.map(x => {
        let [command, string] = x.split(` `);
        if (command === `print`) {
            obj.print();
        } else {
            obj[command](string);
        }
    });
}