function vacation(input){

let numberOfPages = Number(input[0])
let pagesPerHour = Number(input[1])
let numberOfDays = Number(input[2])

let totalTimeReading = numberOfPages / 20
let neededHourdPerDay = totalTimeReading / numberOfDays

console.log(neededHourdPerDay)

}
