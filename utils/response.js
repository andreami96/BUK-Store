"use strict";
/***
 * Class used to represent a generic response in the endpoints
 */
class Response {

    /***
     *  The constructor of the response class
     * @param code      The HTTP code of the response
     * @param message   A message for that kind of code
     */
    constructor(code, message) {
        this.statusCode = code;
        this.description = message;
    }

    /***
     *  Returns the Response in JSON format
     * @returns {string}    The object in JSON format
     */
    toJSON() {
        return JSON.stringify({
            statusCode: this.statusCode,
            description: this.description
        });
    }
}

module.exports = Response;