const Joi = require('joi');

const Schema = Joi.object({
    UserId: Joi.number().required(),
    Calorie: Joi.number().required(),
    Carb: Joi.number().required(),
    Protein: Joi.number().required(),
    Fat: Joi.number().required(),
});

module.exports = Schema;