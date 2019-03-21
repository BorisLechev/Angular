"use strict";
exports.__esModule = true;
var ticket_1 = require("./ticket");
function processTickets(arrayTicketDescriptions, sortingCriteria) {
    var result = [];
    arrayTicketDescriptions.forEach(function (ticketDescription) {
        var _a = ticketDescription.split('|'), destinationName = _a[0], price = _a[1], status = _a[2];
        result.push(new ticket_1["default"](destinationName, price, status));
    });
    switch (sortingCriteria) {
        case "destination":
            return result.sort(function (a, b) { return a.destination.localCompare(b.destination); });
        case "price":
            return result.sort(function (a, b) { return a.price - b.price; });
        case "status":
            return result.sort(function (a, b) { return a.status.localCompare(b.status); });
    }
}
console.log(processTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination'));
console.log(processTickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'status'));
