module.exports = function (sequelize, type) {
    return sequelize.define('author', {
        authorID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        surname: {
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
        biography: {
            type: type.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    }, {
        timestamps: false
    });
};