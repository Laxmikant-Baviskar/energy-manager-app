const express = require("express");
const { register, login } = require("../controllers/auth");
const { checkUser } = require("../middlewares/auth");
const router = express.Router();

router.post("/", register);
router.post("/login", login);
router.post("/energymgr", checkUser);

module.exports = router;
