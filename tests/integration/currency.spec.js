const request = require("supertest");
const app = require("../../src/app");

describe("CURRENCY", () => {
  it("CONVERT CURRENCY TO", async () => {
    const response = await request(app).post("/currency-convert").send({
      origin_currency: "BRL",
      origin_value: 300.5,
      destination_currency: "USD",
    });

    expect(response.body.currency_data).toHaveProperty("destination_value");
  });
});
