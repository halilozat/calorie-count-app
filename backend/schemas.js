const allFood = {
    response: {
        200: {
            type: 'array',
            items: {
                type: 'object',
                required: ['id', 'name'],
                properties: {
                    id: { type: 'string', format: 'uuid' },
                    name: { type: 'string' },
                }
            }
        }
    }
}

module.exports = {
    allFood
}