const fastifyPlugin = require('fastify-plugin')
const { Client } = require('pg')
require('dotenv').config()

const client = new Client({
    user: 'postgres',
    password: "passwod",
    host: 'localhost',
    port: 5432,
    database: "database_development_dev2"
})
async function dbconnector(fastify, options) {
    try {
        await client.connect()
        console.log("db connected succesfully")
        fastify.decorate('db', { client })
    } catch (err) {
        console.error(err)
    }
}
module.exports = fastifyPlugin(dbconnector)