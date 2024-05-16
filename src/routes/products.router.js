import { Router } from "express";
import { productModel } from "../models/products.model.js";

const router = Router()

router.get('/', (req,res)=>{
    res.send('get de productos')
})

router.post('/', async (req, res)=>{
    const {body} = req

    const result = await productModel.create(body)
    res.send(result)
})

export default router

