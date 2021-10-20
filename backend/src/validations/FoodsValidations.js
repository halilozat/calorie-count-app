const Joi = require('joi');

const Schema = Joi.object({
    UserId: Joi.number().required(),
    Foodname: Joi.string().required(),
    Gram: Joi.number().required(),
    Amount: Joi.number().required(),
    Calorie: Joi.number().required(),
    Carb: Joi.number().required(),
    Protein: Joi.number().required(),
    Fat: Joi.number().required(),
});

module.exports = Schema;