import serviceActions from "../controllers/serviceController.js";
import express from "express"
const router = express.Router()

router.get("/",serviceActions.getAll)
router.get("/:id",serviceActions.getByID)
router.post("/",serviceActions.createservice)
router.delete("/:id",serviceActions.deleteService)

export default router