module.exports = function (sequelize, type) {
    return sequelize.define('book', {
        ISBN: {
            type: type.STRING,
            primaryKey: true,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        title: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        picture: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        factSheet: {
            type: type.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        abstract: {
            type: type.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        interview: {
            type: type.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        availableQuantity: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                min: 0
            }
        },
        price: {
            type: type.FLOAT,
            allowNull: false,
            validate: {
                min: 0
            }
        }
    }, {
        timestamps: false
    });
};