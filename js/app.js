import ParkingSpotModel from "./model/parking-spot-model.js";
import ParkingSpotView from "./view/parking-spot-view.js";
import ParkingSpotController from "./controller/parking-spot-controller.js";

import ReservationModel from "./model/reservation-model.js";
import ReservationView from "./view/reservation-view.js";
import ReservationController from "./controller/reservation-controller.js";

import { SECTIONS, changeTo } from "./utils.js";

const psContainer = document.getElementById("ps-container");
const reservationsTable = document.getElementById("res-table").querySelector("tbody");

const links = document.querySelectorAll("nav a");

const psModel = new ParkingSpotModel();
await psModel.init();
const psView = new ParkingSpotView();
const psController = new ParkingSpotController(psModel, psView, psContainer);

const reservationModel = new ReservationModel();
const reservationView = new ReservationView();
const reservationController = new ReservationController(reservationModel, reservationView, reservationsTable);

links[0].addEventListener("click", function(event) {
    event.preventDefault();
    changeTo(SECTIONS.PARKING_SPOTS);
});

links[1].addEventListener("click", function(event) {
    event.preventDefault();
    changeTo(SECTIONS.RESERVATIONS);
});

const app = {
    init: async function() {
        psController.insertParkingSpots();
        reservationController.insertReservations();
    }
}

app.init();
