const fastify = require('fastify')({
    logger: true
})
require('dotenv').config();
fastify.register(require('fastify-formbody'))
fastify.register(require('fastify-multipart'))


//Database Connection
const db = require('./config/database');
db.authenticate().then(() => {
    db.sync()
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})


const authRoute = require('./routes/auth');
const userFood = require('./routes/userFood');
const foodRoute = require('./routes/apiData');

fastify.register(require('fastify-cors'), {
    origin: true,
    credentials: true
});

fastify.register(authRoute, { prefix: "/api/auth" });
// fastify.register(userRoute, { prefix: "/api/users" });
fastify.register(foodRoute, { prefix: "/api/food" });
fastify.register(userFood, { prefix: "/api/userFood" });

const start = async () => {
    try {
        await fastify.listen(5001);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();