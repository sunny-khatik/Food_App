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
        required: true
    }
})
// userSchema.pre("save", async function (next) {
//     const user = this
//     if (user.isModified("password")) {
//         user.password = await bcrypt.hash(user.password, 8)
//     }
//     next()
// })
const User = mongoose.model("User", userSchema)
module.exports = User