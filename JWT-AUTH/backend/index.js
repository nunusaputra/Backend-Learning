import express from "express"
import db from "./config/database.js"
import router from "./routes/index.js"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"

dotenv.config()
const app = express()

const PORT = 5000

try {
    await db.authenticate()
    console.log('Database connected...');
} catch (error) {
    console.error(error);
}

app.use(cors({ credentials: true, origin: 'http://localhost:3000'}))
app.use(cookieParser())
app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
})