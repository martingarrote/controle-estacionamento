import ParkingSpotModel from "./model/parking-spot-model.js";
import ParkingSpotView from "./view/parking-spot-view.js";
import ParkingSpotController from "./controller/parking-spot-controller.js";

const psContainer = document.getElementById("ps-container");

const psModel = new ParkingSpotModel();
await psModel.init();
const psView = new ParkingSpotView();
const psController = new ParkingSpotController(psModel, psView, psContainer);

const app = {
    init: async function() {
        psController.insertParkingSpots();
    }
}

app.init();
