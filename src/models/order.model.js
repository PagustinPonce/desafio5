import { Schema, model } from "mongoose";

const OrderSchema = new Schema({
    name: String,
    size:{
        type: String,
        enum: ["small", "medium", "large"],
        default: "medium"
    },
    price: Number,
    quantity: Number,
    date: Date
})

export const orderModel = model('orders', OrderSchema)