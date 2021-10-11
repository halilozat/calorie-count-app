const JWT = require('jsonwebtoken')
const Boom = require('boom')

const verifyAccessToken = (req, res, next) => {
    const authorizationToken = req.headers["authorization"];

    if (!authorizationToken) {
        next(Boom.unauthorized());
    }

    JWT.verify(authorizationToken, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
        if (err) {
            return next(
                Boom.unauthorized(
                    err.name === "JsonWebTokenError" ? "Unauthorized" : err.message
                )
            )
        }
        req.payload = payload;
        next();
    })
}


module.exports = {
    verifyAccessToken
}