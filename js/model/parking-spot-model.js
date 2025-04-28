export default class ParkingSpotModel {
    constructor() {
        this.parkingSpots = []
    }
    
    async init() {
        this.parkingSpots = await this.load()

        this.load()
    }

    async load() {
        if (this.hasCache()) {
            this.parkingSpots = this.loadFromCache()
            return
        }

        this.parkingSpots = this.importData();
        
        this.saveCache(this.parkingSpots)
        return
    }

    getAll() {
        return this.parkingSpots;
    }

    setStatus(id, status) {

        id = parseInt(id.substring(3), 10) - 1;
        status = status.toLowerCase().trim()

        if (!['free', 'occupied'].includes(status)) {
            throw new Error("Status invalido!")
        }

        this.parkingSpots[id].status = status

        this.saveCache(this.parkingSpots)
    }

    loadFromCache() {
        return JSON.parse(localStorage.getItem("parking-spots"))
    }

    saveCache(data) {
        localStorage.setItem("parking-spots-cached", true)
        localStorage.setItem("parking-spots", JSON.stringify(data))
    }

    hasCache() {
        return localStorage.getItem("parking-spots-cached")
    }

    cleanCache() {
        localStorage.removeItem("parking-spots-cached")
        localStorage.removeItem("parking-spots")
    }

    importData() {
        return [
            {"id": 1, "number": 1, "status": "Free"},
            {"id": 2, "number": 2, "status": "Free"},
            {"id": 3, "number": 3, "status": "Free"},
            {"id": 4, "number": 4, "status": "Free"},
            {"id": 5, "number": 5, "status": "Free"},
            {"id": 6, "number": 6, "status": "Free"},
            {"id": 7, "number": 7, "status": "Free"},
            {"id": 8, "number": 8, "status": "Free"},
            {"id": 9, "number": 9, "status": "Free"},
            {"id": 10, "number": 10, "status": "Free"},
            {"id": 11, "number": 11, "status": "Free"},
            {"id": 12, "number": 12, "status": "Free"},
            {"id": 13, "number": 13, "status": "Free"},
            {"id": 14, "number": 14, "status": "Free"},
            {"id": 15, "number": 15, "status": "Free"}
        ]
    }
}
