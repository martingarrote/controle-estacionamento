import { SECTIONS, changeTo} from "../utils.js"

export default class ReservationController {
    constructor(model, view, container) {
        this.model = model
        this.view = view
        this.container = container

        this.formContainer = document.getElementById("parking-reservation")
        this.addListeners()
    }

    addListeners() {
        document.addEventListener("reservation-initiated", (event) => {
            changeTo(SECTIONS.CREATE_RESERVATION)
            this.setSpotId(event.detail.id)
        })

        this.formContainer.addEventListener("submit", (event) => {
            this.createReservation(event)
        })
    }

    createReservation(event) {
        event.preventDefault()

        const formData = new FormData(this.formContainer);

        const reservation = {};

        formData.entries().forEach(([key, value]) => {
            reservation[key] = value;
        });

        this.model.create(reservation)
        this.formContainer.reset()
        
        console.log(reservation)
        alert("Reserva realizada com sucesso!")
        
        this.dispatchReservationCreated("ps-" + reservation.parkingSpotNumber)
        changeTo(SECTIONS.RESERVATIONS)

        this.insertReservations()
    }

    insertReservations() {
        let reservations = ''

        this.model.getAll().forEach(r => {
            reservations += this.view.get(r)
        })

        this.container.innerHTML = reservations;
    }

    setSpotId(id) {
        const input = document.getElementById("parkingSpotNumber")

        input.value = id.substring(3)

        this.insertReservations()
    }

    dispatchReservationCreated(spotId) {
        const event = new CustomEvent("reservation-created", {
            detail: {
                "id": spotId
            }
        })

        document.dispatchEvent(event)
    }
}