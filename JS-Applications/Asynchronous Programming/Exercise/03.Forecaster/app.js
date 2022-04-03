function attachEvents() {
    document.getElementById(`submit`).addEventListener(`click`, display)
}

attachEvents();

async function display() {

    const initialData = await getInitialWeatherData();

    const forcastDisplayElement = document.querySelector(`#forecast`);
    const currentDivElement = document.querySelector(`#current`);
    const upcomingDivElement = document.querySelector(`#upcoming`);

    const data = await Promise.all([
        currentCondition(initialData.code),
        threeDayForecas(initialData.code)
    ]);

    const todaysCondition = data[0].forecast.condition;

    let hexCode = ``;

    switch (todaysCondition) {
        case `Sunny`:
            hexCode = `&#x2600;`;
            break;
        case `Partly sunny`:
            hexCode = `&#x26C5;`;
            break;
        case `Overcast`:
            hexCode = `&#x2601;`;
            break;
        case `Rain`:
            hexCode = `&#x2614;`;
            break;
        case `Degrees`:
            hexCode = `&#176;`;
            break;
    }

    forcastDisplayElement.style.display = `block`;

    e(`span`, hexCode, `class`, `condition symbol`, currentDivElement);
    const condistionSpan = e(`span`, undefined, `class`, `condition`, currentDivElement);
    e(`span`, data[0].name, `class`, `forecast-data`, condistionSpan);
    e(`span`, `${data[0].forecast.low}${`&#176;`} / ${data[0].forecast.high}&#176;`, `class`, `forecast-data`, condistionSpan);
    e(`span`, data[0].forecast.condition, `class`, `forecast-data`, condistionSpan);


    console.log(currentDivElement);





}

async function getInitialWeatherData() {

    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    try {

        const req = await fetch(url);

        if (req.status != 200) {
            throw new Error(`Error`);
        }

        const data = await req.json();

        const location = data.filter(l => l.name == document.querySelector(`#location`).value);

        if (location.length < 1) {
            throw new Error(`Error`);
        }

        return location[0];

    } catch (error) {
        document.querySelector(`#forecast`).style.display = `block`;
        document.querySelector(`.label`).firstChild.textContent = error;
        document.querySelector(`#upcoming div`).lastChild.textContent = ``;
    }

}

async function currentCondition(code) {

    const url = `http://localhost:3030/jsonstore/forecaster/today/` + code;

    try {

        const req = await fetch(url);

        if (req.status != 200) {
            throw new Error(`Error`);
        }

        const data = await req.json();

        return data

    } catch (error) {
        document.querySelector(`#forecast`).style.display = `inline-block`;
        document.querySelector(`.label`).firstChild.textContent = error;
        document.querySelector(`#upcoming div`).lastChild.textContent = ``;
    }
}

async function threeDayForecas(code) {

    const url = `http://localhost:3030/jsonstore/forecaster/upcoming/` + code;

    try {

        const req = await fetch(url);

        if (req.status != 200) {
            throw new Error(`Error`);
        }

        const data = await req.json();

        return data

    } catch (error) {
        document.querySelector(`#forecast`).style.display = `inline-block`;
        document.querySelector(`.label`).firstChild.textContent = error;
        document.querySelector(`#upcoming div`).lastChild.textContent = ``;
    }

}

function e(elementTyle, innerText, attribute, attributeText, parent) {

    const element = document.createElement(elementTyle);
    element.textContent = innerText;

    if (attribute != undefined) {
        element.setAttribute(attribute, attributeText);
    }

    if (parent != undefined) {
        parent.appendChild(element);
    }

    return element;
}