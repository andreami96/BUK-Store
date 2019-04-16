module.exports = function (sequelize, type) {
    return sequelize.define('theme', {
        themeID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
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
        description: {
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