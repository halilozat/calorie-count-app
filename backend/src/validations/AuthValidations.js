const Joi = require('joi');

const Schema = Joi.object({
    UserName: Joi.string(),
    Email: Joi.string().email().required(),
    Password: Joi.string().min(6).required(),
    ConfirmPassword: Joi.string().min(6),
});

module.exports = Schema;