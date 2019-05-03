const { Reservation } = require('../../../Model/sequelize');
const sequelize = require('sequelize');
const Op = require('sequelize').Op;
const { formatDate } = require('../../../Utils/formatDate');

exports.findBestseller = function (limit, fromDate, toDate) {

    let option = {};

    option.where = {
        orderDate: {
            [Op.gte]: fromDate,
            [Op.lte]: toDate
        },
    };

    option.limit = limit;

    option.attributes = ['ISBN', [sequelize.fn('sum', sequelize.col('quantity')), 'booksSold']];
    option.group = ['ISBN'];
    option.order = [[sequelize.fn('sum', sequelize.col('quantity')), 'DESC']];

    return Reservation.findAll(option)

};