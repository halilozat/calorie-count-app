const fastify = require('fastify')({ logger: true })
const { Client } = require('pg')
const { allFood } = require("./schemas")

async function routes(fastify, options) {

    const client = fastify.db.client
    // fastify.get('/', { schema: allFood }, async function (request, reply) {
    //     try {
    //         const { rows } = await client.query('SELECT * FROM food')
    //         console.log(rows)
    //         reply.send(rows)
    //     } catch (err) {
    //         throw new Error(err)
    //     }
    // })

    fastify.get('/', async (request, reply) => {
        reply.send("Hello World!")
    })

}


module.exports = routes