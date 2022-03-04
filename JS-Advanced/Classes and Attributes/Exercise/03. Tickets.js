function ticketsManager(ticketsData, sortingCriteria) {

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    return ticketsData.map(x => x.split(`|`))
        .map(([destination, price, status]) => new Ticket(destination, Number(price), status))
        .sort((a, b) => {
            return typeof a[sortingCriteria] === `number` ?
                a[sortingCriteria] - b[sortingCriteria] :
                a[sortingCriteria].localeCompare(b[sortingCriteria]);
        });

}