const express = require("express");
// import {login, logout, register} from "../controllers/auth.controllers.js";
const userControllers = require("../controllers/auth.controllers")

const router = express.Router();

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);
router.post("/logout", userControllers.logout);

module.exports = router;