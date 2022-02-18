function attachEventsListeners() {

    let convertButtonElement = document.querySelector(`#convert`);

    convertButtonElement.addEventListener(`click`, convert)

    function convert(e) {

        let inputMetric = document.querySelector(`#inputUnits`).value;
        let outputMetric = document.querySelector(`#outputUnits`).value;

        let inputValue = Number(document.querySelector(`#inputDistance`).value);
        let outputValue = document.querySelector(`#outputDistance`).value;

        let metricsInMeters = {
            km: 1000,
            m: 1,
            cm: 0.01,
            mm: 0.001,
            mi: 1609.34,
            yrd: 0.9144,
            ft: 0.3048,
            in: 0.0254,
        }

        let resultValue = 0;

        switch (inputMetric) {
            case `km`:
                resultValue = inputValue * metricsInMeters.km;
                break;
            case `m`:
                resultValue = inputValue * metricsInMeters.m;
                break;
            case `cm`:
                resultValue = inputValue * metricsInMeters.cm;
                break;
            case `mm`:
                resultValue = inputValue * metricsInMeters.mm;
                break;
            case `mi`:
                resultValue = inputValue * metricsInMeters.mi;
                break;
            case `yrd`:
                resultValue = inputValue * metricsInMeters.yrd;
                break;
            case `ft`:
                resultValue = inputValue * metricsInMeters.ft;
                break;
            case `in`:
                resultValue = inputValue * metricsInMeters.in;
                break;
        }

        switch (outputMetric) {
            case `km`:
                resultValue /= metricsInMeters.km;
                break;
            case `m`:
                resultValue;
                break;
            case `cm`:
                resultValue /= metricsInMeters.cm;
                break;
            case `mm`:
                resultValue /= metricsInMeters.mm;
                break;
            case `mi`:
                resultValue /= metricsInMeters.mi;
                break;
            case `yrd`:
                resultValue /= metricsInMeters.yrd;
                break;
            case `ft`:
                resultValue /= metricsInMeters.ft;
                break;
            case `in`:
                resultValue /= metricsInMeters.in;
                break;
        }

        document.querySelector(`#outputDistance`).value = resultValue;
    }
}