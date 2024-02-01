const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errormiddlewares");

dotenv.config()
connectDB()
const app = express()


app.use(express.json())




// app.get("/", (req,res)=>{
// res.send("API is running succesfully")
// })
app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000
app.listen(5000,console.log(`Server started on  ${PORT}`))