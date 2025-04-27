export default class ParkingSpotModel {
    constructor() {
        this.data = []
    }
    
    async init() {
        this.data = await this.load()

        this.load()
    }

    async load() {
        if (this.hasCache()) {
            this.data = this.loadFromCache()
            return
        }
        
        this.data = await this.loadFromJson()
        this.saveCache(this.data)
        return
    }

    getAll() {
        return this.data;
    }

    setStatus(id, status) {

        id = parseInt(id.substring(3), 10) - 1;
        status = status.toLowerCase().trim()

        if (!['free', 'occupied'].includes(status)) {
            throw new Error("Status invalido!")
        }

        this.data[id].status = status

        this.saveCache(this.data)
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
        return JSON.parse(localStorage.getItem("data"))
    }

    saveCache(data) {
        localStorage.setItem("cached", true)
        localStorage.setItem("data", JSON.stringify(data))
    }

    hasCache() {
        return localStorage.getItem("cached")
    }

    cleanCache() {
        localStorage.removeItem("cached")
        localStorage.removeItem("data")
    }
}
