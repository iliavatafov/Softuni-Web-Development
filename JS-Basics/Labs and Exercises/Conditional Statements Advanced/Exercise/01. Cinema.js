function cinema(input) {

    let typeProjection = input[0];
    let countRows = Number(input[1]);
    let countColumns = Number(input[2]);

    let ticketPrice = 0;

    switch (typeProjection) {
        case "Premiere":
            ticketPrice = 12;
            break;
        case "Normal":
            ticketPrice = 7.50;
            break;
        case "Discount":
            ticketPrice = 5;
            break;
    }
    let totalTickets = countColumns * countRows;
    let income = ticketPrice * totalTickets;
    console.log(`${income} leva`)
}