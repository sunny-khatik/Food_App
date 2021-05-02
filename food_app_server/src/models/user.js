const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Please Enter Valid Email")
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    avatar: {
        type: Buffer
    },
    address: {
        type: String,
        trim: true,

    },
    token: {
        type: String,

    }
})
// userSchema.pre("save", async function (next) {
//     const user = this
//     if (user.isModified("password")) {
//         user.password = await bcrypt.hash(user.password, 8)
//     }
//     next()
// })
userSchema.statics.findbyCredentials = async function (uname, password) {
    const user = await User.findOne({ uname })
    if (!user)
        throw new Error("Unable to login")
    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch)
        throw new Error("Unable to login")
    return user
}
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, "sunny khatik")
    user.token = token
    await user.save()
    return token
}
userSchema.pre("save", async function (next) {
    const user = this
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})
const User = mongoose.model("User", userSchema)
module.exports = User