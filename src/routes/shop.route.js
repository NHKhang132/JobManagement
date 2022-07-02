import { Router } from "express";
import { ShopCtrl } from "../controllers/shop.controller.js";

const router = Router()

router.post('/shop', ShopCtrl.createShop)
router.get('/shop/:id', ShopCtrl.getShopbyOwnerId)

export default router;