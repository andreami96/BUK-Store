module.exports = function (sequelize, type) {
    return sequelize.define('cart', {
        quantity: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                min: 0
            }
        }
    }, {
        timestamps: false
    });
};