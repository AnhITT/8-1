var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name: String,
    price: Number,
    isDelete: Boolean,
    order: Number,
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        },
    ],
});
const Product = mongoose.model("Product", schema);

module.exports = Product;
