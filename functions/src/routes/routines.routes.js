import { Router } from "express";
import {
  createRoutine,
  getRoutine,
  getRoutines,
} from "../services/routines.services.js";

export const routineRouter = Router();

routineRouter.post("/routine", async (req, res) => {
  const routine = req.body;
  const id = await createRoutine(routine);
  res.send(id.toString());
});

routineRouter.get("/routines", async (req, res) => {
  const routines = await getRoutines();
  res.send(routines);
});

routineRouter.get("/routine/:type", async (req, res) => {
  const { type } = req.params;
  const routine = await getRoutine(type);
  res.send(routine);
});
