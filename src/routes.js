const express = require("express");

const { celebrate, Segments, Joi } = require("celebrate");
const CurrencyControllers = require("./controllers/CurrencyControllers");

const routes = express.Router();

routes.post(
  "/currency-convert",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      origin_currency: Joi.string().required().length(3),
      origin_value: Joi.number().required(),
      destination_currency: Joi.string().required().length(3),
    }),
  }),
  CurrencyControllers.create
);

module.exports = routes;
