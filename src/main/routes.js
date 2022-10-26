const express = require("express");
const router = express.Router();
const { validator } = require("./middlewares");

const { makeCreateLinkController } = require("./factories/handlers");
const { CreateLinkValidator } = require("../validation");

router.post("/links", validator(CreateLinkValidator), makeCreateLinkController());

module.exports = router;
