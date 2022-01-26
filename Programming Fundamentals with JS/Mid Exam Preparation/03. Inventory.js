function inventory(arr) {
    let box = arr.shift().split(`, `);

    for (let operations of arr) {
        if (operations === `Craft!`) {
            console.log(box.join(`, `))
        } else {
            let [command, item, newItem] = operations.split(` - `);

            switch (command) {
                case `Collect`:
                    collect(item, box)
                    break;
                case `Drop`:
                    drop(item, box)
                    break;
                case `Combine Items`:
                    combineItems(item, box, newItem)
                    break;
                case `Renew`:
                    renew(item, box)
                    break;
            }
        }
    }

    function collect(item, box) {
        if (!box.includes(item)) {
            box.push(item);
        }
    }

    function drop(item, box) {
        if (box.includes(item)) {
            let index = box.indexOf(item);
            box.splice(index, 1);
        }
    }

    function combineItems(item, box) {
        let firstItem = item.split(`:`);
        secondItem = firstItem[1]
        firstItem = firstItem[0];
        if (box.includes(firstItem)) {
            let index = box.indexOf(firstItem);
            box.splice(index + 1, 0, secondItem);
        }
    }

    function renew(item, box) {
        if (box.includes(item)) {
            let index = box.indexOf(item);
            box.splice(index, 1);
            box.push(item)
        }
    }
}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]



)