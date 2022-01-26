function bonusPoints(input){

    let startPoints = Number(input[0]);

    let bonusPoints = 0;
    let additionalBonusPoints = 0;

    if(startPoints <= 100){
      bonusPoints = 5;
      if(startPoints % 2 == 0){
          additionalBonusPoints = 1;
      }
      else if(startPoints % 10 == 5){
          additionalBonusPoints = 2;
      }      
    }
    else if(startPoints > 1000){
        bonusPoints = startPoints * 0.10;
        if(startPoints % 2 == 0){
            additionalBonusPoints = 1;
        }
        else if(startPoints % 10 == 5){
            additionalBonusPoints = 2;
        }      
    }
    else if(startPoints > 100 && startPoints <= 1000){
        bonusPoints = startPoints * 0.20;
        if(startPoints % 2 == 0){
            additionalBonusPoints = 1;
        }
        else if(startPoints % 10 == 5){
            additionalBonusPoints = 2;
        }      
    }
    console.log(bonusPoints + additionalBonusPoints)
    console.log(startPoints + bonusPoints + additionalBonusPoints)
}
