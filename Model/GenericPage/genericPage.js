module.exports = function (sequelize, type) {
    return sequelize.define('genericPage', {
        pageID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pageName: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        body: {
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