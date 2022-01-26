function commonElements(array1, array2) {

    for (let i of array1) {
        for (let j of array2) {
            if (i === j) {
                console.log(i)
            }
        }
    }
}
