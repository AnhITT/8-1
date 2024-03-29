var express = require("express");
const { model } = require("mongoose");
const { use } = require(".");
var router = express.Router();
var responseData = require("../helper/responseData");
var modelCate = require("../models/category");

router.get("/", async function (req, res, next) {
    console.log(req.query);
    var categories = await modelCate.getAll(req.query);
    responseData.responseReturn(res, 200, true, categories);
});
module.exports = router;
