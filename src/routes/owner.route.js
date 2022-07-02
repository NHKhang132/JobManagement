import { Router } from "express";
import { OwnerCtrl } from "../controllers/owner.controller.js";

const router = Router()

router.post('/owner', OwnerCtrl.createOwner)

export default router;