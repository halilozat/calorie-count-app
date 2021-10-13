/** Dependencies */
const bcrypt = require('bcrypt');

function jwtTokenGenerator(payload) {
  const accessToken = jwt.sign({
      Id: payload.Id,
      UserName: payload.UserName,
      Email: payload.Email,
    },
    process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "300d"
    }
  );

  return accessToken
}

class AuthController {
  static async Login(repositories, request, reply) {
    try {
      const {
        Email,
        Password
      } = request.body;

      const {
        userRepository
      } = repositories;

      const findUser = await userRepository.findByEmail(Email);

      if (!findUser) {
        throw new Error('NotFound');
      }

      const isPasswordCorrect = await bcrypt.compare(Password, findUser.password)

      if (findUser.Password !== isPasswordCorrect) {
        throw new Error('BadRequest')
      }

      const userData = {
        Id: findUser.id,
        UserName: findUser.username,
        Email: findUser.email,
      }

      const jwtToken = jwtTokenGenerator(userData);

      reply
        .code(200)
        .setCookie(
          process.env.JWT_COOKIE_NAME,
          jwtToken, {
            domain: process.env.UI_DOMAIN_URL,
            path: '/'
          }
        )
        .send(userData);

    } catch (error) {
      if (['NotFound', 'BadRequest'].includes(error.message)) {
        reply.code(400).send();
      }

      reply.code(500).send();
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

      const {
        userRepository
      } = repositories;


      if (Password !== ConfirmPassword) {
        throw new Error('Founded')
      }

      const findUser = await userRepository.findByEmail(Email);

      if (findUser) {
        throw new Error('BadRequest');
      }

      const hashedPassword = await bcrypt.hash(Password, 10)

      const user = await userRepository.addUser({
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
          process.env.JWT_COOKIE_NAME,
          jwtToken, {
            domain: process.env.UI_DOMAIN_URL,
            path: '/'
          }
        )
        .send(userData);

    } catch (error) {
      if (['Founded', 'BadRequest'].includes(error.message)) {
        reply.code(400).send();
      }

      reply.code(500).send();
    }
  }

  static async Me(request, reply) {
    try {
      const {
        userData,
      } = request.body;

      reply.code(200).send(userData);

    } catch (error) {
      if (['Founded', 'BadRequest'].includes(error.message)) {
        reply.code(400).send();
      }

      reply.code(500).send();
    }
  }
}

module.exports = AuthController;