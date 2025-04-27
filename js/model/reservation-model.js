export default class ReservationModel {
    constructor() {
        this.reservations = this.load();
    }
    
    create(reservation) {
        this.reservations.push(reservation)

        this.saveCache(this.reservations)
    }

    getAll() {
        return this.reservations
    }

    load() {
        if (this.hasCache()) {
            return this.loadFromCache();
        }

        return [];
    }

    saveCache(reservations) {
        localStorage.setItem("reservations-cache", true)
        localStorage.setItem("reservations", JSON.stringify(reservations))
    }
    
    loadFromCache() {
        return JSON.parse(localStorage.getItem("reservations"))
    }
    
    hasCache() {
        localStorage.getItem("reservations-cache")
    }

    cleanCache() {
        localStorage.removeItem("reservations-cache", true)
        localStorage.removeItem("reservations", JSON.stringify(reservations))
    }
}