import { Router } from "express";
import { StaffCtrl } from "../controllers/staff.controller.js";

const router = Router()

router.post('/staff', StaffCtrl.createStaff)

export default router;