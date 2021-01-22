const express = require("express")
const entrysRouter = express.Router()
const Journals = require("../models/journals.js")

entrysRouter.use(express.json())

// get all
// get one
// post
// update
// delete



module.exports = entrysRouter