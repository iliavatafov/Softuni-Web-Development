function vacation(group, type, day) {

    let ticketPrice = 0;
    let totalPrice = 0;

    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    ticketPrice = 8.45;
                    totalPrice = group * ticketPrice;
                    if (group >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case "Saturday":
                    ticketPrice = 9.80;
                    totalPrice = group * ticketPrice;
                    if (group >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
                case "Sunday":
                    ticketPrice = 10.46;
                    totalPrice = group * ticketPrice;
                    if (group >= 30) {
                        totalPrice *= 0.85;
                    }
                    break;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    ticketPrice = 10.90;
                    totalPrice = group * ticketPrice;
                    if (group >= 100) {
                        totalPrice = (group - 10) * ticketPrice;
                    }
                    break;
                case "Saturday":
                    ticketPrice = 15.60;
                    totalPrice = group * ticketPrice;
                    if (group >= 100) {
                        totalPrice = (group - 10) * ticketPrice;
                    }
                    break;
                case "Sunday":
                    ticketPrice = 16;
                    totalPrice = group * ticketPrice;
                    if (group >= 100) {
                        totalPrice = (group - 10) * ticketPrice;
                    }
                    break;
            }

            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    ticketPrice = 15;
                    totalPrice = group * ticketPrice;
                    if (group >= 10 && group <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
                case "Saturday":
                    ticketPrice = 20;
                    totalPrice = group * ticketPrice;
                    if (group >= 10 && group <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
                case "Sunday":
                    ticketPrice = 22.50;
                    totalPrice = group * ticketPrice;
                    if (group >= 10 && group <= 20) {
                        totalPrice *= 0.95;
                    }
                    break;
            }
            break;
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}