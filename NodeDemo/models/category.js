var SchemaCategory = require("../schema/categories");

module.exports = {
    getAll: function (query) {
        const filter = { isDelete: false };
        return SchemaCategory.find(filter).exec();
    },
};
