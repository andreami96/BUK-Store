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
        backgroundPicture: {
            type: type.STRING,
            allowNull: true,
            validate: {
                notEmpty: true
            }
        },
        year: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                min: 1000
            }
        },
        pageNumber: {
            type: type.INTEGER,
            allowNull: false,
            validate: {
                min: 0
            }
        },
        editor: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        originalLanguage: {
            type: type.STRING,
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
            allowNull: false
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