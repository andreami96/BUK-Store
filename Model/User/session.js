module.exports = function (sequelize, type) {
    return sequelize.define('session', {
        sessionID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        sessionToken: {
            type: type.STRING,
            allowNull: false
        },
        expirationDate: {
            type: type.DATEONLY
        }
    }, {
        timestamps: false
    });
};