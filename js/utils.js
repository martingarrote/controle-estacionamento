export const SECTIONS = {
    PARKING_SPOTS: document.getElementById("ps-section"),
    CREATE_RESERVATION: document.getElementById("new-reservation"),
    RESERVATIONS: document.getElementById("reservations-section")
}


export function changeTo(section) {
    for (const key in SECTIONS) {
        SECTIONS[key].classList.add("hidden")
    }

    section.classList.remove("hidden")
}