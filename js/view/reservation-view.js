export default class ReservationView {
    constructor() {}

    get(reservation) {
        return `
            <tr>
                <td>${reservation.parkingSpotNumber}</td>
                <td>${reservation.ownerName}</td>
                <td>${reservation.apartmentNumber}</td>
                <td>${reservation.apartmentBlock}</td>
                <td>${reservation.vehicleModel}</td>
                <td>${reservation.vehicleSign}</td>
                <td>${reservation.vehicleColor}</td>
            </tr>
        `
    }
}
