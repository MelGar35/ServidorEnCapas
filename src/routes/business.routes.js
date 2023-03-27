import {Router} from "express"
import { 
    getBusiness,
    getBusinessById, 
    createBusiness, 
    addProduct
 } from "../controllers/bussines.controller.js"
 
const router = Router()

router.get("/", getBusiness)
router.post("/", createBusiness)

router.get("/:id", getBusinessById)
router.put("/:id/products", addProduct)

export default router