import { Router } from "express";

const router = Router();
import {
  getAll,
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../controllers/ctrl.js";

router.get("/getAll", getAll);
router.get("/getOne/:id", getOne);
router.post("/createOne", createOne);
router.put("/updateOne/:id", updateOne);
router.delete("/deleteOne/:id", deleteOne);

export default router;
