exports.isChar = function(string) {
    const charRegex = /(^[a-z]$)|(^a-z$)/;
    return charRegex.test(string);
};