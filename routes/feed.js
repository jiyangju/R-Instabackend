const router = require("express").Router()
const {getFeed, getAll, postFeed} = require("../controllers/feed")

router.get('/', getFeed)

router.post('/', postFeed)

router.get('/all', getAll)

module.exports = router

