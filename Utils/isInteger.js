exports.isInt= function(string) {
    const intRegex = /^\d+$/;
    return intRegex.test(string);
};