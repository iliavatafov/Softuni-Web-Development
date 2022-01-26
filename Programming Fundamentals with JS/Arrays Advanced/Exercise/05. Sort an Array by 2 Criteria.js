function sortTwoCriteria(strings) {

    strings.sort((a, b) => {
        let firstCriteria = a.length - b.length;
        let secondCriteria = a.localeCompare(b);

        return firstCriteria || secondCriteria;
    });
    console.log(strings.join(`\n`))
}
