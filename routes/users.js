const router = require("express").Router()
const { getUsers, getMe, postUser } = require("../controllers/users")

router.get('/', getUsers)

router.post('/', postUser)

router.get('/me', getMe)


module.exports = router