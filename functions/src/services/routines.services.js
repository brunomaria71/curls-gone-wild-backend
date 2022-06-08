import { getRoutinesCollection } from "../gateway/db.js";

export const createRoutine = async (routine) => {
  const col = await getRoutinesCollection();
  const { insertedId } = await col.insertOne(routine);

  return insertedId;
};

export const getRoutine = async (type) => {
  const col = await getRoutinesCollection();
  const routine = await col.findOne({ type });

  return routine;
};

export const getRoutines = async () => {
  const col = await getRoutinesCollection();
  const routines = await col.find({}).toArray();
  return routines;
};

export const updateRoutine = async (type, updateObject) => {
  const col = await getRoutinesCollection();
  await col.updateOne({ type }, { $set: updateObject });
};
