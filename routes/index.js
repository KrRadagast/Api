import  express  from "express";
import charrouter from "./characters.routes";

const router=express.Router();
router.use("/characters",charrouter)
export default router;