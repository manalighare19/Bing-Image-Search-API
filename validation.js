const Joi = require('@hapi/joi');

//search term Validation
const searchValidation = (data) =>{
    const schema = Joi.object({
        q: Joi.string().required(),
        imageType: Joi.string().empty("").default('All')
    });

    return schema.validate(data);
};

module.exports.searchValidation = searchValidation;