import express from "express";
import {
  addNewFlight,
  getFlights,
  getFlight,
  updateFlight,
  deleteFlight,
} from "../controllers/flightController.js";
import { protect, admin } from "../utils/middleware.js";

const router = express.Router();
router.post("/addFlight", addNewFlight);
router.get("/allFlights", getFlights);
router.put("/:id", protect, admin, updateFlight);
router.delete("/:id", protect, admin, deleteFlight);
router.route("/:id").get(getFlight);

export default router;
