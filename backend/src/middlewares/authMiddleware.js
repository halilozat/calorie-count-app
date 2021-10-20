/** Dependencies */
const jwt = require('jsonwebtoken');

function authenticationMiddleware(request, response, done) {
    const decode = jwt.verify(request.cookies.jwt, process.env.ACCESS_TOKEN_SECRET)

    if (!decode) {
        response.code(401).send();
    }

    if (request.body === null) {
        request.body = {}
    }

    request.body.userData = decode

    done()
}

module.exports = authenticationMiddleware;