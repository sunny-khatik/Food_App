const { json } = require("express")
const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")


const app = express()
const port = process.env.PORT || 3030

<<<<<<< HEAD

app.use(express.json())
app.use(userRouter)
=======
app.use(express.json())
app.use("/users", userRouter)

>>>>>>> be2f56af337aa47f13959a8d96326d7a5c29a3e6

app.listen((port), () => {
    console.log(`Server is up and running on ${port}...`)
})

