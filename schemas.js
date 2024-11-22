const baseJoi = require('joi');

const sanitizeHTML = require('sanitize-html');

const extension = (joi)=>({
  type: 'string',
  base : joi.string(),
  messages : {
    'string.escapeHTML' : '{{#label}} must not include HTML'
  },
  rules : {
    escapeHTML : {
      validate(value,helpers){
        const clean = sanitizeHTML(value,{
          allowedtags : [],
          allowedattributes : {}
        });
        if(clean !== value) return helpers.error('string.escapeHTML',{value})
        return clean;
      }
    }
  }
});

const Joi = baseJoi.extend(extension);
module.exports.campgroundSchema = Joi.object({
    campground : Joi.object({
      title : Joi.string().required().min(3).escapeHTML(),
      price : Joi.number().required().min(0),
      location : Joi.string().required().escapeHTML(),
      description : Joi.string().required().min(5).escapeHTML(),
      // image : Joi.string().required(),
    }).required(),
    deleteImages : Joi.array()
  });

module.exports.reviewSchema = Joi.object({
  review : Joi.object({
    rating : Joi.number().required().min(1).max(5),
    body: Joi.string().required().escapeHTML(),
  }).required()
});


