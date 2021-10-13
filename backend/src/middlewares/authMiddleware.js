const jwt = require('jsonwebtoken')

function authenticationMiddleware(request, response) {
    const decode = jwt.verify(request.cookies.jwt, process.env.ACCESS_TOKEN_SECRET)

    if (decode) {
        request.body.userData = decode
    }

    response.code(401).send()
}

module.exports = authenticationMiddleware