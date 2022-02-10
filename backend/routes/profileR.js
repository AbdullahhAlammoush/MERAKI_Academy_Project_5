const profile = require("../controllers/profileBE");
const express = require("express");
const profileRouter = express.Router();
//the original route is "profile"
profileRouter.get("/:userId", profile);
module.exports = profileRouter;
