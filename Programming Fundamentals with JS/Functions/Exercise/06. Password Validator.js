function passValidator(password) {


    if (checkIsOnlyDigitsAndLetters(password) === true && checkLength(password) === true && checkIsTwoDigits(password) === true) {
        console.log(`Password is valid`);
    }
    if (checkLength(password) === false) {
        console.log(`Password must be between 6 and 10 characters`);
    }
    if (checkIsOnlyDigitsAndLetters(password) === false) {
        console.log(`Password must consist only of letters and digits`);
    }
    if (checkIsTwoDigits(password) === false) {
        console.log(`Password must have at least 2 digits`);
    }

    function checkLength(password) {
        let length = password.length;
        if (length < 6 || length > 10) {
            return false;
        } else {
            return true;
        }
    }

    function checkIsOnlyDigitsAndLetters(password) {
        let currentPick = ``;
        let flag = true;
        for (let i = 0; i < password.length; i++) {
            currentPick = password[i];
            currentPick = currentPick.charCodeAt(0);

            if (currentPick > 47 && currentPick < 58) {
                continue;
            } else if ((currentPick > 64 && currentPick < 91) || (currentPick > 96 && currentPick < 123)) {
                continue;
            } else {
                flag = false;
                break;
            }
        }
        return flag;
    }

    function checkIsTwoDigits(password) {
        let currentPick = ``;
        let counter = 0;
        for (let i = 0; i < password.length; i++) {
            currentPick = password[i];
            currentPick = currentPick.charCodeAt(0);

            if (currentPick > 47 && currentPick < 58) {
                counter++;
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }
}
