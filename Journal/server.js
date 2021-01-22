const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(morgan("dev"))
app.use("/journal", require("./routes/entrysRouter.js"))

mongoose.connect("mongodb://localhost:27017/journalsdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}, 
() => console.log("connected to journals Db"))

app.listen(9000, () => {
    console.log("Running on server 9000")
})