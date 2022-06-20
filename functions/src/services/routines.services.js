import { getRoutinesCollection } from "../gateway/db.js";

export const createRoutine = async (routine) => {
  try {
    const col = await getRoutinesCollection();
    const { insertedId } = await col.insertOne(routine);

    return insertedId;
  } catch (error) {
    console.error(error);
  }
};

export const getRoutine = async (type) => {
  try {
    const col = await getRoutinesCollection();
    const routine = await col.findOne({ type });

    return routine;
  } catch (error) {
    console.error(error);
  }
};

export const getRoutines = async () => {
  try {
    const col = await getRoutinesCollection();
    const routines = await col.find({}).toArray();
    return routines;
  } catch (error) {
    console.error(error);
  }
};

export const updateRoutine = async (type, updateObject) => {
  try {
    const col = await getRoutinesCollection();
    await col.updateOne({ type }, { $set: updateObject });
  } catch (error) {
    console.error(error);
  }
};
