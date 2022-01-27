function cinemaTickets(input) {

    let movieName = input.shift();
    let freePlaces = Number(input.shift());
    let totalStudent = 0;
    let totalStandard = 0;
    let totalKid = 0
    let flagFreeSpaces = false;

    while (movieName !== "Finish") {

        let type = "";
        let totalPlaces = 0;
        let student = 0;
        let standard = 0;
        let kid = 0

        while (type != "End") {

            type = input.shift();

            if (type === "student") {
                student++;
                totalStudent++;
            }
            else if (type === "standard") {
                standard++;
                totalStandard++;
            }
            else if (type === "kid") {
                kid++;
                totalKid++;
            }
            else if (type === "End") {
                let pracentageCurrentMovie = (totalPlaces / freePlaces) * 100;
                console.log(`${movieName} - ${pracentageCurrentMovie.toFixed(2)}% full.`)
            }

            totalPlaces = student + standard + kid;

            if (totalPlaces >= freePlaces) {

                let pracentageCurrentMovie = (totalPlaces / freePlaces) * 100;
                console.log(`${movieName} - ${pracentageCurrentMovie.toFixed(2)}% full.`)
                break;
            }
        }
        movieName = input.shift();
        freePlaces = Number(input.shift());
    }
    let totalTickets = totalStandard + totalStudent + totalKid;

    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((totalStudent / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((totalStandard / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((totalKid / totalTickets) * 100).toFixed(2)}% kids tickets.`);

}
