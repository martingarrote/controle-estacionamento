export default class ParkingSpotController {
    constructor(model, view, psContainer) {
        this.model = model
        this.view = view
        this.container = psContainer
        
        this.addListeners()
    }

    addListeners() {
        const spotContainer = document.getElementById("ps-container")

        spotContainer.addEventListener("parking-spot-clicked", (event) => {
            this.dispatchReservationInitiated(event.detail)
        })

        document.addEventListener("reservation-created", (event) => {
            this.model.setStatus(event.detail.id, 'occupied')
            this.insertParkingSpots()
        })
    }

    insertParkingSpots() {
        let spots = '';
        this.model.getAll().forEach(ps => {
            spots += this.view.get(ps)
        })

        this.container.innerHTML = spots;
    }

    dispatchReservationInitiated(spot) {
        const event = new CustomEvent("reservation-initiated", {
            detail: {
                "id": spot.id
            }
        })

        document.dispatchEvent(event)
    }
}
