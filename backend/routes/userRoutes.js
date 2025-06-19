
import express from "express"
const router = express.Router();

import { getUserDetails } from "../controllers/getUserDetails.js";
import { tokenMiddleware } from "../middleware/auth.middleware.js";
import { subscribe } from "../controllers/subsciption.js";
import { createPayment, verifyPayment } from "../controllers/payments.js";
import { findReferal } from "../controllers/findReferal.js";
import { createReferal } from "../controllers/createReferal.js";




router.get("/getUserDetails",tokenMiddleware,getUserDetails);
router.post("/subscription",tokenMiddleware,subscribe);
router.post("/createPayment",tokenMiddleware,createPayment)
router.post("/verifyPayment",tokenMiddleware,verifyPayment)
router.post("/createReferal",createReferal)
router.post("/findReferal",findReferal)

export const userRoutes = router;