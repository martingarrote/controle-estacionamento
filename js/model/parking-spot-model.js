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
        
        this.parkingSpots = await this.loadFromJson()
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

    async loadFromJson() {
        try {
            const response = await fetch('../../data/parking-spots.json');

            if (!response.ok) {
                throw new Error("Erro ao receber dados.")
            }

            const data = await response.json()

            if (!Array.isArray(data)) {
                throw new Error("Dados recebidos não são condizentes a uma array")
            }

            return data;

        } catch (error) {
            console.error(`Erro na importação de dados: ${error}`)
            return [];
        }
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
}
