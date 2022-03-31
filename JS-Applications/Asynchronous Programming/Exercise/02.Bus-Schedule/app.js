function solve() {

    const info = document.querySelector(`.info`);

    const departBtn = document.querySelector(`#depart`);
    const arriveBtn = document.querySelector(`#arrive`);

    let stop = {
        next: `depot`,
    }

    async function depart() {

        const response = await fetch(`http://localhost:3030/jsonstore/bus/schedule/${stop.next}`);

        stop = await response.json();

        info.textContent = `Next stop ${stop.name}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false;
    }

    function arrive() {
        info.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();