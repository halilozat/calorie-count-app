/** Dependencies */
const jwt = require('jsonwebtoken');

function authenticationMiddleware(request, response) {
    const decode = jwt.verify(request.cookies.jwt, process.env.ACCESS_TOKEN_SECRET)

    if (!decode) {
        response.code(401).send();
    }

    request.body.userData = decode
}

module.exports = authenticationMiddleware;