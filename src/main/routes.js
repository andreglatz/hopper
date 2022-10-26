const express = require("express");
const router = express.Router();
const { validator } = require("./middlewares");

const { makeCreateLinkController, makeRedirectLinkController } = require("./factories/handlers");
const { CreateLinkValidator } = require("../validation");

router.post("/links", validator(CreateLinkValidator), makeCreateLinkController());
router.get("/links/:path", makeRedirectLinkController());

module.exports = router;
