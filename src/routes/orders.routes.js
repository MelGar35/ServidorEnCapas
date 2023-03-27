import {Router} from "express"
import { 
    createOrder, 
    getOrderById, 
    getOrders, 
    resolverOrder
 } from "../controllers/orders.controller.js"
 
const router = Router()

router.get("/", getOrders)
router.post("/", createOrder)

router.get("/:id", getOrderById)
router.put("/:id", resolverOrder)

export default router