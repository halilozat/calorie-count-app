const fastify = require('fastify')({ logger: true })
const { Client } = require('pg')
const { allFood } = require("./schemas")
const userController = require('./userController')

async function routes(fastify, options) {

    const client = fastify.db.client
    // fastify.get('/', { schema: allFood }, async function (request, reply) {
    //     try {
    //         const { rows } = await client.query('SELECT * FROM users')
    //         console.log(rows)
    //         reply.send(rows)
    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // })

    fastify.get('/', async (request, reply) => {
        reply.send("Hello World!")
    })

    fastify.post('/',)


}


module.exports = routes