import { Router } from "express"
import { CallMe } from "../controllers/InputInfo.js"

const router = new Router()

router.post("/callme", CallMe)

export default router