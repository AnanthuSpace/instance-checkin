const express = require("express")
const Router = express.Router()
const instanceController = require("../controllers/instanceController")

Router.get("/", instanceController.getInstance)
Router.post("/add-instance", instanceController.addInstance)

module.exports = Router;