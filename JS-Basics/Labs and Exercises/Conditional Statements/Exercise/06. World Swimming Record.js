function record(input){

    let worldRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeForOneMeter = Number (input[2]);

    let distanceForSwim = distanceInMeters * timeForOneMeter;
    let additionalTime = Math.floor(distanceInMeters / 15) * 12.5;

    let totalTime = distanceForSwim + additionalTime;

    let nedostig = totalTime - worldRecord;

    if(totalTime < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else{
        console.log(`No, he failed! He was ${nedostig.toFixed(2)} seconds slower.`);
    }
}
