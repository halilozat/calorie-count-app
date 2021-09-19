const fastify = require('fastify')({
    logger: true
})

require('dotenv').config();


//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');

fastify.register(require('fastify-cors'), {
    origin: true,
    credentials: true
});

fastify.register(authRoute, { prefix: "/api/auth" });
// fastify.register(userRoute, { prefix: "/api/users" });

const start = async () => {
    try {
        await fastify.listen(5001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();