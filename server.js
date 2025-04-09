import express from "express"
import dotenv from "dotenv"
import connectToDB from "./database/db.js";
import { Todo } from "./models/todo.model.js";
dotenv.config();
const app = express()
const port = process.env.port || 4000

app.use(express.json())

connectToDB();

// TODO APIS
app.get("/", async (req, res) => {
    try {
        const result = await Todo.find()
        res.send({
            success: true,
            message: "Todo Lists Retreied syccess",
            data: result,
        })
    } catch(error) {
        res.send({
            success: false,
            message: "Failed",
            data: result,
        })
    }

})

app.post("/create-todo", async (req, res) => {
    const todoDetails = req.body
    try {
        const result = await Todo.create(todoDetails)
        res.send({
            success: true,
            message: "Todo Is Created Successfully",
            data: result,
        })
    } catch(error) {
        console.log(error)
        res.send({
            success: false,
            message: "Failed",
            data: result,
        })
    }

})

app.listen(4000, () => {
    console.log(`SERVER is running on port ${port}`)
})