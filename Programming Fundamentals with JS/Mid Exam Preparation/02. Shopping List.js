function shoppingList(arr) {
    let list = arr.shift().split(`!`)

    for (let i = 0; i < arr.length; i++) {
        let temp = arr[i].split(` `);
        let operation = temp[0];
        let item = temp[1];

        if (operation === `Go Shopping!`) {
            break;
        }

        switch (operation) {
            case `Urgent`:
                if (!list.includes(item)) {
                    list.unshift(item);
                }
                break;
            case `Unnecessary`:
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    list.splice(index, 1);
                }
                break;
            case `Correct`:
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    let newItem = temp[2];
                    list.splice(index, 1, newItem);
                }
                break;
            case `Rearrange`:
                if (list.includes(item)) {
                    let index = list.indexOf(item);
                    let temp = list.splice(index, 1);
                    list.push(temp);
                }
                break;
        }
    }
    console.log(list.join(`, `));
}