const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    order: {
        type: Number,
        required: true,
    },
    isDelete: {
        type: Boolean,
        default: false,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
        },
    ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
