const express = require("express")
require("./db/mongoose")
const userRouter = require("./routers/user")


const app = express()
const port = process.env.PORT || 3030

app.use(express.json())
app.use("/users", userRouter)


app.listen((port), () => {
    console.log(`Server is up and running on ${port}...`)
})

