const User = require("../models/user")
const jwt = require("jsonwebtoken")

const auth = async () => {
    try {
        const token = req.header("Authorization").replace("Bearer ", "")
        const decoded = jwt.verify(token, "sunnychiks")
        const user = await User.findOne({ _id: decoded._id, token })
        if (!user) {
            throw new Error("Invalid Login")
        }
        req.token = token
        req.user = user
        next()
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate Yourself" })
    }
}
module.exports = auth
