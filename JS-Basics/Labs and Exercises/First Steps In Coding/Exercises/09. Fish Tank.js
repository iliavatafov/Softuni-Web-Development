function aquarium(input) {

    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let hight = Number(input[2]);
    let pracentage = Number(input[3]);

    let aquariumVolume = lenght * width * hight;
    let aquariumVolumeInLiters = aquariumVolume * 0.001;

    let otherThingsInAquarium = pracentage * 0.01;

    let neededWaterInLiters = aquariumVolumeInLiters * (1 - otherThingsInAquarium);

    console.log(neededWaterInLiters);
}