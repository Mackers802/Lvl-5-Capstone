const express = require("express")
const entrysRouter = express.Router()

const Journals = require("../models/journals.js")

entrysRouter.use(express.json())

module.exports = entrysRouter