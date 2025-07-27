import express from 'express'
import connectDB from './config/db.js'
import authRouter from './routes/auth.routes.js'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())

const PORT = process.env.PORT || 3000



app.use("/api/auth", authRouter)
app.listen(PORT, () => {
  connectDB()
  console.log(`Server is running on port 3000 `&{PORT})
}
)