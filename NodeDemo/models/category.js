var SchemaCategory = require("../schema/categories");

module.exports = {
    getAll: function (query) {
        const filter = { isDelete: false };
        const options = {
            sort: { order: 1 },
        };

        return SchemaCategory.find(filter)
            .sort(options.sort)
            .populate("products") // Thêm populate để lấy thông tin của products
            .exec();
    },
};
