/** Dependencies */
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')

/** Validations */
const AuthValidationSchema = require('../../../validations/AuthValidations')

/** Services */
const UserDomainService = require('../../../domain/services/UserDomainService')


function jwtTokenGenerator(payload) {
  const accessToken = jwt.sign({
    Id: payload.Id,
    UserName: payload.UserName,
    Email: payload.Email,
  },
    process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "1d"
  }
  );

  return accessToken
}


class AuthController {

  static async Login(repositories, request, reply) {
    try {
      const { Email, Password } = request.body;
      const { error } = AuthValidationSchema.validate(request.body)

      if (error) { return error.details[0].message }

      const findUser = await UserDomainService.FindUserByEmail(repositories, Email);
      if (!findUser) { throw new Error('NotFound'); }

      const isPasswordCorrect = await bcrypt.compare(Password, findUser.password)
      if (!isPasswordCorrect) { throw new Error('BadRequest') }

      const userData = {
        Id: findUser.id,
        UserName: findUser.username,
        Email: findUser.email,
      }

      const jwtToken = jwtTokenGenerator(userData);

      reply
        .code(200)
        .setCookie(
          'jwt',
          jwtToken,
          {
            domain: 'dev.calorie-count.com',
            path: '/',
            maxAge: 24 * 3600
          }
        )
        .send(userData);
    } catch (error) {
      if (['NotFound', 'BadRequest'].includes(error.message)) {
        reply.code(400).send(error.message);
      }

      reply.code(500).send({ message: "error : " + error.message });
    }
  }

  static async Register(repositories, request, reply) {
    try {
      const {
        UserName,
        Email,
        Password,
        ConfirmPassword,
      } = request.body;

      const { error } = AuthValidationSchema.validate(request.body)

      if (error) { return error.details[0].message }

      if (Password !== ConfirmPassword) { throw new Error('Founded') }

      const findUser = await UserDomainService.FindUserByEmail(repositories, Email);

      if (findUser) { throw new Error('BadRequest') }

      const hashedPassword = await bcrypt.hash(Password, 10)

      const user = await UserDomainService.AddUser(repositories, {
        username: UserName,
        email: Email,
        password: hashedPassword,
      })

      const userData = {
        Id: user.id,
        UserName: user.username,
        Email: user.email,
      }

      const jwtToken = jwtTokenGenerator(userData);

      reply
        .code(201)
        .setCookie(
          'jwt',
          jwtToken,
          {
            domain: 'dev.calorie-count.com',
            path: '/',
            maxAge: 24 * 3600
          }
        )
        .send(userData);

    } catch (error) {
      if (['Founded', 'BadRequest'].includes(error.message)) {
        reply.code(400).send(error.message);
      }

      reply.code(500).send();
    }
  }

  static async Me(request, reply) {
    try {
      const { userData } = request.body;

      reply.code(200).send(userData);

    } catch (error) {
      if (['Founded', 'BadRequest'].includes(error.message)) {
        reply.code(400).send();
      }

      reply.code(500).send();
    }
  }

  static async Logout(request, reply) {

    reply
      .code(200)
      .clearCookie('jwt', { path: "/", domain: "dev.calorie-count.com" })
      .send({ message: "Logout successfull!" })
  }

}

module.exports = AuthController;