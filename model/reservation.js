module.exports = function (sequelize, type) {
    return sequelize.define('reservation', {
        reservationID: {
            type: type.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        shippingLocation: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        orderDate: {
            type: type.DATEONLY,
            allowNull: false
        },
        arrivalDate: {
            type: type.DATEONLY,
            allowNull: false
        },
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