const express = require("express")
const router = new express.Router()
const User = require(("../models/user"))

router.get("/test", async (req, res) => {
    try {
        res.send("gothaa")
    } catch (error) {
        console.log("" + error)
    }
})
