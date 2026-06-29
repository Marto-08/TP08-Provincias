import express from "express";
import * as provinceController from "../controllers/province-controller.js";

const router = express.Router();

router.get("/", provinceController.getAll);
router.get("/:id", provinceController.getById);
router.post("/", provinceController.create);
router.put("/", provinceController.update);
router.delete("/:id", provinceController.remove);

export default router;
