/** Dependencies */
const fastify = require('fastify')({ logger: true })
fastify.register(require('fastify-cors'), { origin: true, credentials: true });
fastify.register(require('fastify-formbody'))
fastify.register(require('fastify-multipart'))
require('dotenv').config();

/** Database Connection */
const db = require('./config/database');
db.authenticate().then(() => {
    db.sync()
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

/** Routes */
const routes = require('./routes');
fastify.register(routes, { prefix: '/api' });


const start = async () => {
    try {
        await fastify.listen(5001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();