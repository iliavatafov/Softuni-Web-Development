function megicMetrics(arr) {

    let text = arr.toString();
    let newArray = text.split(`,`);

    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    for (k = 0; k < newArray.length; k++) {
        if (k < 3) {
            arr1.push(newArray[k]);
        } else if (k < 6) {
            arr2.push(newArray[k]);
        } else {
            arr3.push(newArray[k]);
        }
    }

    let sum = 0;
    let v1 = 0;
    let v2 = 0;
    let v3 = 0;

    for (i = 0; i < arr1.length; i++) {
        sum += parseInt(arr1[i]) + parseInt(arr2[i]) + parseInt(arr3[i]);
    }
    for (j = 0; j < arr1.length; j++) {
        v1 += parseInt(arr1[j]);
        v2 += parseInt(arr2[j]);
        v3 += parseInt(arr3[j]);
    }
    sum *= 2;
    sum /= 6;
    if (sum === v1 && sum === v2 && sum === v3) {
        console.log(true);
    } else {
        console.log(false);
    }
}


