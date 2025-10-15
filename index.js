require("dotenv").config()
var express = require("express")

var connectToDatabase = require("./database/db")
var userRoute = require("./routes/user-routes")
var homeRoute =require("./routes/home-routes")
var adminRoute=require("./routes/admin-routes")
var cors = require("cors")

var app = express()

// connect to the database

connectToDatabase()

// add the middleware
app.use(express.json())

app.use("/api/auth", userRoute)
app.use("/api/home",homeRoute)
app.use("/api/welcome",adminRoute)

app.use(cors())


var PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("the server is running");

})
