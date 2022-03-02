const User = require("../models/User")

const postUser = async (req, res) => {
    const user = new User({
        name: req.body.name,
        imageUrl: req.body.imageUrl
    })

    try {
        const newUser = await user.save()
        res.send({success: true, user: newUser})
    } catch(err){
        res.send({success: false, err: err})
    }
}

const getUsers = async (req, res) => {
    const allUsers = await User.find()
    res.json(allUsers)
}

const getMe = (req, res) => {
    res.send("I am Jiyang")
}


module.exports = {
    getUsers,
    getMe,
    postUser
}