import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

import ApiRouter from "./router/ApiRouter.js"

const app = express()
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.static('public'))


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.use("/api", ApiRouter)

async function start() {
    try {
        app.listen(PORT, () => {
            console.log("Server started on PORT:", PORT)
        })
    } catch (error) {

    }
}

start()

