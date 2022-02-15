function attachEventsListeners() {

    let inputElements = document.querySelectorAll("input[type=text]");

    let daysOutputElement = inputElements[0];
    let hoursOutputElement = inputElements[1];
    let minutesOutputElement = inputElements[2];
    let secondsOutputElement = inputElements[3];

    let units = {
        day: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }

    let buttonElements = document.querySelectorAll("input[type=button]");

    for (let buttonElement of buttonElements) {
        buttonElement.addEventListener(`click`, convert);
    }

    function convert(e) {

        let inputNumber = Number(e.target.parentNode.querySelector("input[type=text]").value);
        let inputUnit = e.target.parentNode.querySelector("input").id;

        switch (inputUnit) {
            case `days`:
                daysOutputElement.value = inputNumber;
                hoursOutputElement.value = inputNumber * units.hours;
                minutesOutputElement.value = inputNumber * units.minutes;
                secondsOutputElement.value = inputNumber * units.seconds;
                break;
            case `hours`:
                daysOutputElement.value = inputNumber / units.hours;
                hoursOutputElement.value = inputNumber;
                minutesOutputElement.value = daysOutputElement.value * units.minutes;
                secondsOutputElement.value = daysOutputElement.value * units.seconds;
                break;
            case `minutes`:
                daysOutputElement.value = inputNumber / units.minutes;
                hoursOutputElement.value = daysOutputElement.value * units.hours;
                minutesOutputElement.value = inputNumber;
                secondsOutputElement.value = daysOutputElement.value * units.seconds;
                break;
            case `seconds`:
                daysOutputElement.value = inputNumber / units.seconds;
                hoursOutputElement.value = daysOutputElement.value * units.hours;
                minutesOutputElement.value = daysOutputElement.value * units.minutes;
                secondsOutputElement.value = daysOutputElement.value * units.seconds;
                break;
        }
    }

}