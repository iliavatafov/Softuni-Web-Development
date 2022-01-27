function summerOutfit(input) {

    let degreece = Number(input[0]);
    let partOfTheDay = input[1];

    let outfit = "";
    let shoues = "";

    switch (partOfTheDay) {
        case "Morning":
            if (degreece <= 18) {
                outfit = "Sweatshirt";
                shoues = "Sneakers";
            }
            else if (degreece > 18 && degreece <= 24) {
                outfit = "Shirt";
                shoues = "Moccasins";
            }
            else {
                outfit = "T-Shirt";
                shoues = "Sandals";
            }
            break;
        case "Afternoon":
            if (degreece <= 18) {
                outfit = "Shirt";
                shoues = "Moccasins";
            }
            else if (degreece > 18 && degreece <= 24) {
                outfit = "T-Shirt";
                shoues = "Sandals";
            }
            else {
                outfit = "Swim Suit";
                shoues = "Barefoot";
            }
            break;
        case "Evening":
            if (degreece <= 18) {
                outfit = "Shirt";
                shoues = "Moccasins";
            }
            else if (degreece > 18 && degreece <= 24) {
                outfit = "Shirt";
                shoues = "Moccasins";
            }
            else {
                outfit = "Shirt";
                shoues = "Moccasins";
            }
            break;
    }
    console.log(`It's ${degreece} degrees, get your ${outfit} and ${shoues}.`)
}