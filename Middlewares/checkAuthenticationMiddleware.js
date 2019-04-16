const Response = require('../Utils/response');
const {check_session_token} = require('../Controller/User/authentication');

/***
 * Middleware used to know if the user is authenticated through the X-API_KEY token
 * @param req           The request coming from the client
 * @param res           The response to send to the next middleware
 * @param next          The next middleware
 * @returns {*}         If this middleware returns, it means that there is that X-API-KEY inside the application
 */
exports.checkAuthMiddleware = function (req, res, next) {
    let user_token = req.headers['x-api-key'];

    if(!user_token) {
        let error = new Response(401, "The user in not authorized to access this endpoint");
        return next(error);
    }

    check_session_token(user_token).then((userID) => {
        req.userID = userID;
        next();
    }).catch(() => {
        let error = new Response(401, "The user in not authorized to access this endpoint");
        return next(error);
    });
};