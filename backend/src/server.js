import express from "express"
import authRoutes from "./routes/auth.route.js"
import messageRoutes from "./routes/message.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()

const app = express()
const port = process.env.PORT

// extract the json data from the request body
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use('/api/auth', authRoutes)
app.use('/api/messsages', messageRoutes)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    connectDB()
})