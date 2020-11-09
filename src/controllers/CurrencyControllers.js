const axios = require("axios");
module.exports = {
  async index(request, response) {
    response.json({ message: "Bem vindo ao conversor" });
  },
  async create(request, response) {
    const apiURL = "https://api.exchangeratesapi.io/latest?base=";
    const {
      origin_currency,
      origin_value,
      destination_currency,
    } = request.body;

    await axios
      .get(`${apiURL}${origin_currency}`)
      .then(async function (result) {
        const { rates } = result.data;
        if (rates.hasOwnProperty(destination_currency)) {
          const data = (origin_value * rates[destination_currency]).toFixed(2);
          const currency_data = {
            origin_currency,
            origin_value,
            destination_currency,
            destination_value: parseFloat(data),
            currency_tax: rates[destination_currency],
          };
          return response.status(202).json({ currency_data });
        } else {
          throw new Error();
        }
      })
      .catch(function (error) {
        return response.status(400).send({
          statusCode: 400,
          error: "Bad Request",
          message: "Destination code or Origin code is not valid!",
          validation: {
            headers: {
              source: "body",
              keys: ["destination_currency", "origin_currency"],
              message: "Destination code or Origin code is not valid!",
            },
          },
        });
      });
  },
  async update(request, response) {},
  async delete(request, response) {},
};
