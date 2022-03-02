const express = require('express')
const mongoose = require("mongoose");
var cors = require('cors')
require("dotenv").config()

const usersRoute = require("./routes/users")
const feedRoute = require("./routes/feed")

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DATABASE connected now")
}

app.get('/', (req, res) => {
    res.json("Welcome to R-Insta API")
})

app.use('/api/v1/users', usersRoute)
app.use('/api/v1/feed', feedRoute)

app.listen(8000, () => console.log('app started at port 8000'))










