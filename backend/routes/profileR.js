const profile = require("../controllers/profileBE");
const express = require("express");
const profileRouter = express.Router();
profileRouter.get("/", profile);
module.exports = profileRouter;
