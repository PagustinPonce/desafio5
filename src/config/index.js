import { connect } from "moongose";
import {orderModels} from '../models/order.model.js'

const ordenes = [
    {
        name: "Margherita",
        size: "small",
        price: 8,
        quantity: 2,
        date: "2021-01-13T09:08:13Z"
    },
    {
        name: "Pepperoni",
        size: "medium",
        price: 12,
        quantity: 1,
        date: "2020-05-13T09:08:13Z"
    },
    {
        name: "Hawaiian",
        size: "medium",
        price: 16,
        quantity: 3,
        date: "2022-03-11T09:08:13Z"
    },

    {
        name: "Hawaiian",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-14T09:08:13Z"
    },
    {
        name: "Margherita",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-11T09:08:12Z"
    },
    {
        name: "Pepperoni",
        size: "large",
        price: 16,
        quantity: 3,
        date: "2022-03-15T09:08:13Z"
    },
    {
        name: "Pepperoni",
        size: "large",
        price: 25,
        quantity: 3,
        date: "2022-03-18T09:08:12Z"
    },
    {
        name: "Margherita",
        size: "large",
        price: 30,
        quantity: 3,
        date: "2022-03-21T09:08:12Z"
    }
]

export const connectDb = async () =>{
    console.log('base de datos conectada')
    connect('mongodb://127.0.0.1:27017/c53145')
}