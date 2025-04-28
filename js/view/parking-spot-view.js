export default class ParkingSpotView {
    constructor() {
        this.addListeners();
    }

    get(spot) {
        return `
            <div class="parking-spot" id="ps-${spot.id}">
                <span class="ps-status" data-status="${spot.status === 'Free' ? 'free' : 'occupied'}"></span>
                <span class="ps-number">${spot.number}</span>
            </div>
        `
    }

    addListeners() {
        const spotContainer = document.getElementById("ps-container")

        spotContainer.addEventListener("click", (e) => {
            const target = e.target

            if (target.matches('.parking-spot')) {
                if (target.querySelector("span").getAttribute("data-status") === "free") {
                    this.dispatchSpotClickEvent(spotContainer, e.target)
                }
                return
            }
        })
    }

    dispatchSpotClickEvent(container, spot) {
        const event = new CustomEvent("parking-spot-clicked", {
            detail: {
                "id": spot.id
            }
        })

        container.dispatchEvent(event)
    }
}
