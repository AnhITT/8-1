var express = require("express");
const { model } = require("mongoose");
const { use } = require(".");
var router = express.Router();
var responseData = require("../helper/responseData");
var modelProduct = require("../models/product");

router.get("/", async function (req, res) {
    console.log(req.query);
    var usersAll = await modelProduct.getAll(req.query);
    responseData.responseReturn(res, 200, true, usersAll);
});
router.post("/add", async function (req, res) {
    try {
        const { name, price, isDelete, order, categories } = req.body;
        if (!name || !price || !order || !categories) {
            return responseData.responseReturn(
                res,
                400,
                false,
                "Invalid Input"
            );
        }
        const newProduct = await modelProduct.createProduct({
            name: name,
            price: price,
            isDelete: isDelete || false,
            order: order,
            categories: categories,
        });
        responseData.responseReturn(res, 200, true, newProduct);
    } catch (error) {
        console.error(error);
        responseData.responseReturn(res, 500, false, "Internal Server Error");
    }
});
router.put("/:id", async function (req, res) {
    try {
        const { name, price, isDelete, order, categories } = req.body;
        if (!name || !price || !order || !categories) {
            return responseData.responseReturn(
                res,
                400,
                false,
                "Invalid Input"
            );
        }

        const updatedProduct = await modelProduct.updateProduct(
            req.params.id,
            req.body
        );
        if (!updatedProduct) {
            return responseData.responseReturn(
                res,
                404,
                false,
                "Product not found"
            );
        }
        responseData.responseReturn(res, 200, true, updatedProduct);
    } catch (error) {
        console.error(error);
        responseData.responseReturn(res, 500, false, "Internal Server Error");
    }
});
router.delete("/:id", async function (req, res, next) {
    try {
        const updatedProduct = await modelProduct.deleteProduct(req.params.id);
        if (!updatedProduct) {
            return responseData.responseReturn(
                res,
                404,
                false,
                "Product not found"
            );
        }
        responseData.responseReturn(res, 200, true, updatedProduct);
    } catch (error) {
        console.error(error);
        responseData.responseReturn(res, 500, false, "Internal Server Error");
    }
});
module.exports = router;
