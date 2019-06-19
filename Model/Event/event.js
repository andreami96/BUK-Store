module.exports = function (sequelize, type) {
    return sequelize.define('event', {
        eventID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: type.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        latitude: {
            type: type.FLOAT
        },
        longitude: {
            type: type.FLOAT
        },
        title: {
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
        },
        eventDate: {
            type: type.DATE,
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
        }
    }, {
        timestamps: false
    })
};