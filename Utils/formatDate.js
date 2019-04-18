exports.formatDate= function(date) {

    let year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();

    month = (month.length === 1)? ("0" + month) : month;
    day = (day.length === 1)? ("0" + day) : day;

    return year + '-' + month + '-' + day;
};