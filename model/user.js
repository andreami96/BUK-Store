module.exports = function (sequelize, type) {
    return sequelize.define('user', {
        id: {
            type: type.UUID,
            primaryKey: true,
            defaultValue: type.UUIDV4
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
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: {msg: 'The given email is wrong or bad written'}
            }
        },
        password: {
            type: type.STRING,
            allowNull: false,
            validate: {
                len: {args: [6, 32], msg: 'Password should be of minimum length equals to 6 and maximum equals to 32'}
            }
        }
    }, {
        timestamps: false
    });
};