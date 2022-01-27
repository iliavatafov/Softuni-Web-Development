function deposti(input) {

    let depostiAmount = Number(input[0]);
    let term = Number(input[1]);
    let interest = Number(input[2]);
    let earnedAmount = depostiAmount + term * ((depostiAmount * (interest * 0.01) / 12));
    console.log(earnedAmount);

}
