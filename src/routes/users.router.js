import { Router } from "express";
import { userModel } from "../models/users.models.js";

const router = Router()

router.get('/', async (req, res)=>{
    const users = await userModel.find()
    console.log(users)
    res.send(users)
})