const express = require("express");
const router = express.Router();

const { afficherVille } = require("../controllers/meteo.controller");

router.get("/meteo/ville", afficherVille);

module.exports = router;