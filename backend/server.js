import express  from "express"
import cors from 'cors' // cross origin resource sharing
import { connectDB } from "./config/db.js"
import userRouter from "./routes/userRoute.js"
import foodRouter from "./routes/foodRoute.js"
import 'dotenv/config'
import cartRouter from "./routes/cartRoute.js"
import orderRouter from "./routes/orderRoute.js"

// above routes haldle the requests and send the response based on functionality and features of the app

// app config
const app = express()
const port = process.env.PORT || 4000;


// middlewares
app.use(express.json()) // Adds a middleware to parse incoming JSON payloads from requests. It ensures that `req.body` contains parsed JSON data.
app.use(cors())

// db connection
connectDB()

// api endpoints
app.use("/api/user", userRouter) // mounts the userRouter to the /api/user path. This means that all routes defined in the userRouter will be prefixed with /api/user.
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads')) // takes the static images from the uploads dir for the web homepage
app.use("/api/cart", cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working") 
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`)) // starts the server on the specified port and logs a message to the console when the server starts.