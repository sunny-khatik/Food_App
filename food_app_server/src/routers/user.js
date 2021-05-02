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
<<<<<<< HEAD
router.post("/user/register", async (req, res) => {

    const user = new User(req.body)
    try {

        await user.save()
        const token = user.generateAuthToken()
        res.status(201).send({ user, token })
    } catch (error) {
        console.log("" + error)
    }
})
router.post("/user/login", async (req, res) => {
    try {
        const user = await User.findbyCredentials(req.body.uname, req.body.password)
        const token = await user.generateAuthToken()
        res.status(200).send({ user, token })
        console.log(req.body)
        console.log(token)
    } catch (error) {
        res.status(404).send("" + error)
    }
})

router.post("/user/logout", async (req, res) => {

})
module.exports = router
=======

module.exports = router
>>>>>>> be2f56af337aa47f13959a8d96326d7a5c29a3e6
