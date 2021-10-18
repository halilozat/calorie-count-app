/** Dependencies */
const EventEmitter = require('events');
const fastify = require('fastify')({ logger: true })

require('dotenv').config();

fastify.register(require('fastify-cors'), { origin: true, credentials: true });
fastify.register(require('fastify-cookie'), { secret: "my-secret", parseOptions: {} });


/** Instance */
const mediator = new EventEmitter();

/** Database */
const postgreSQLClient = require('./database/postgresqlClient');

/** Routes */
const routes = require('./routes');


mediator.on('db:ready', async (repositories) => {
    try {
        fastify.decorate('repositories', repositories);
        fastify.register(routes, { prefix: '/api' });

        await fastify.listen(process.env.NODE_PORT || 5001);

        mediator.emit('api:ready');

    } catch (err) {
        fastify.log.error(err);
        mediator.emit('api:failed');
        process.exit(1);
    }
});

postgreSQLClient(mediator);