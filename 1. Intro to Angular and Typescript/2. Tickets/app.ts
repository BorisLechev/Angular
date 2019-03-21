import Ticket from './ticket';

function processTickets(arrayTicketDescriptions, sortingCriteria): Array<Ticket> {
    let result = [];

    arrayTicketDescriptions.forEach(ticketDescription => {
        const [destinationName, price, status] = ticketDescription.split('|');

        result.push(new Ticket(destinationName, price, status));
    });

    switch (sortingCriteria) {
        case "destination":
            return result.sort((a, b) => a.destination.localCompare(b.destination));
        case "price":
            return result.sort((a, b) => a.price - b.price);
        case "status":
            return result.sort((a, b) => a.status.localCompare(b.status));
    }
}

console.log(processTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination'
));

console.log(processTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status'
));