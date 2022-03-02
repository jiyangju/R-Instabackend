const Feed = require("../models/Feed")

const getFeed = async (req, res) => {
    const feed = await Feed.find()
    res.json(feed)
}

const postFeed = async (req, res) => {
    const feed = new Feed({
        user: req.body.user,
        post: req.body.post
    })

    try {
        const newFeed = await feed.save()
        res.send({success: true, user: newFeed})
    } catch(err){
        res.send({success: false, err: err})
    }
}

const getAll =  (req, res) => {
    res.send(data)
}

module.exports = {
    getAll,
    getFeed,
    postFeed
}