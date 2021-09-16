const fastify = require('fastify')({ logger: true })
const route = require('./routes')
const db = require('./db')

fastify.register(route)

db.authenticate().then(() => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Error: ' + err);
})


async function start() {
    try {
        await fastify.listen(5000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

