function fruits(input) {

    let priceBerries = Number(input[0])
    let quantityBananas = Number(input[1])
    let quantityOranges = Number(input[2])
    let quantityRaspberries = Number(input[3])
    let qunatityBerries = Number(input[4])

    let priceRaspberries = priceBerries / 2
    let priceOranges = priceRaspberries * 0.6
    let priceBanans = priceRaspberries * 0.2

    let totalBerries = priceBerries * qunatityBerries
    let totalBanans = priceBanans * quantityBananas
    let totalOranges = priceOranges * quantityOranges
    let totalRaspberries = priceRaspberries * quantityRaspberries

    let neededBuget = totalBanans + totalBerries + totalOranges + totalRaspberries

    console.log(neededBuget)
}
