import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import bodyParser from "body-parser"
import { app, server } from "./lib/socket.js"

dotenv.config()

const port = process.env.PORT
app.use(bodyParser.json({limit: '50mb'}))
// extract the json data from the request body
app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

server.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connectDB()
})