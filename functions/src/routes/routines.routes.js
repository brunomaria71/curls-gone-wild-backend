import { Router } from "express";
import {
  createRoutine,
  getRoutine,
  getRoutines,
} from "../services/routines.services.js";

export const routineRouter = Router();

routineRouter.post("/routine", async (req, res) => {
  try {
    const routine = req.body;
    const id = await createRoutine(routine);
    res.send(id.toString());
  } catch (error) {
    console.error(error);
  }
});

routineRouter.get("/routines", async (req, res) => {
  try {
    const routines = await getRoutines();
    res.send(routines);
  } catch (error) {
    console.error(error);
  }
});

routineRouter.get("/routine/:type", async (req, res) => {
  try {
    const { type } = req.params;
    const routine = await getRoutine(type);
    res.send(routine);
  } catch (error) {
    console.error(error);
  }
});
