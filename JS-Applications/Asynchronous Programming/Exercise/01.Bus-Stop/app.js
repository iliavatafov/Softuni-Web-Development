async function getInfo() {

    const inputData = document.querySelector(`#stopId`).value;

    const stopNameElement = document.getElementById(`stopName`);
    const busesUlElement = document.getElementById(`buses`);

    try {

        const response = await fetch(`http://localhost:3030/jsonstore/bus/businfo/${inputData}`);

        busesUlElement.innerHTML = ``;

        if (response.status !== 200) {
            throw new Error(`Error`);
        }

        const data = await response.json();

        stopNameElement.textContent = data.name;

        Object.entries(data.buses).forEach(bus => {
            const newLi = document.createElement(`li`);
            newLi.textContent = `Bus ${bus[0]} arrives in ${bus[1]} minutes`;
            busesUlElement.appendChild(newLi);
        });

    } catch (error) {
        busesUlElement.innerHTML = ``;
        stopNameElement.textContent = `Error`;
    }
}