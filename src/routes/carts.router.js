import { Router } from "express";
import CartManagerMongo from "../dao/cartsManagerMongo.js";
import { model } from "mongoose";

const router = Router()
const cartService = new CartManagerMongo()

router.get('/', async (req,res)=>{
    const carts = await cartService.getCarts()
    res.send(carts)
})

router.post('/', async (req,res)=>{
    const carts = await cartService.createCart()
    res.send(carts)
})

router.post('/:cid/products/:pid', async (req, res)=>{
    const {cid, pid}  = req.params

    const result = await cartService.addProducts(cid, pid)
    res.send(result)
})

router.delete('/api/carts/:cid/products/:pid', async (req,res)=>{
    const {cid,pid} = req.params
})

router.delete('/api/carts/:cid', async (req,res)=>{
    const {cid,pid} = req.params
})

const parseId = (id)=>{
    return mongoose.Types.ObjectId(id)
}
router.put('/api/carts/:cid/products/pid',async(req,res)=>{
    const {pid,cid} = req.params.id
})

router.put('/api/carts/:cid',async(req,res)=>{})

export default router