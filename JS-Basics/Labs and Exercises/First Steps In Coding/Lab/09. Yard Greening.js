function yardGreening(input){
let m3ForGreening = parseInt(input[0]) 
let priceForOnem3 = 7.61;
let priceWithoutDiscount = m3ForGreening * priceForOnem3;
let discount = priceWithoutDiscount * 0.18;
let finalPrice = priceWithoutDiscount - discount;
console.log(`The final price is: ${(finalPrice)} lv.`);
console.log(`The discount is: ${(discount)} lv.`)
}

yardGreening(["150"])