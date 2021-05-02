const { json } = require("express")
const express = require("express")
require("./db/mongoose")
const app = express()
const port = process.env.PORT || 3030
const userRouter = require("./routers/user")


app.use(express.json())
app.use(userRouter)

app.listen((port), () => {
    console.log("Server is listening on port :" + port)
})

