function tripplesOfLatinLetter(n) {

    for (i = 0; i < n; i++) {
        let firstLetter = String.fromCharCode(97 + i);
        for (j = 0; j < n; j++) {
            let secondLetter = String.fromCharCode(97 + j);
            for (k = 0; k < n; k++) {
                let thirdLetter = String.fromCharCode(97 + k);
                console.log(firstLetter + secondLetter + thirdLetter)
            }            
        }
    }
}

tripplesOfLatinLetter(3)