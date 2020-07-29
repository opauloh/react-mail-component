const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');
const SendController = require('./controllers/SendController');
const routes = express.Router();

routes.get('/', (request, response) =>
  response.json({
    message: 'React Mail Component API',
    documentation: ''
  })
);

routes.get('/status', (request, response) => response.json({ status: 'OKAY' }));

routes.post(
  '/send',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      to: Joi.array().required(),
      title: Joi.string().required(),
      template: Joi.string().required(),
      template_params: Joi.object().required()
    })
  }),
  SendController.send
);

routes.post(
  '/preview',
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
      to: Joi.array().required(),
      title: Joi.string().required(),
      template: Joi.string().required(),
      template_params: Joi.object().required()
    })
  }),
  SendController.preview
);

module.exports = routes;
