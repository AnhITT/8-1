var SchemaProduct = require("../schema/products");

module.exports = {
    getAll: function (query) {
        const filter = { isDelete: false };
        const options = {
            sort: { order: 1 },
        };
        return SchemaProduct.find(filter).sort(options.sort).exec();
    },
    createProduct: function (product) {
        return new SchemaProduct(product).save();
    },
    getOne: function (id) {
        return SchemaProduct.findById(id);
    },
    getByName: function (name) {
        return SchemaProduct.findOne({ name }).exec();
    },
    updateProduct: function (productId, updateData) {
        return SchemaProduct.findByIdAndUpdate(productId, updateData, {
            new: true,
        });
    },
    deleteProduct: function (productId) {
        return SchemaProduct.findByIdAndUpdate(
            productId,
            { isDelete: true },
            { new: true }
        );
    },
};
