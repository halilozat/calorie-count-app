/** Dependencies */
const fastify = require('fastify')({
    logger: true
})
fastify.register(require('fastify-cors'), {
    origin: true,
    credentials: true
});
const EventEmitter = require('events');
require('dotenv').config();

const mediator = new EventEmitter();

/** Database */
const postgreSQLClient = require('./database/postgresqlClient');
const UserRepository = require('./database/repositories/UserRepository');

/** Routes */
const routes = require('./routes');

mediator.on('db:ready', async () => {
    try {
        const userRepository = new UserRepository();

        fastify.register(routes, {
            prefix: '/api'
        });

        fastify.decorate('repositories', {
            userRepository,
        })

        await fastify.listen(process.env.NODE_PORT || 5001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
});

postgreSQLClient(mediator);