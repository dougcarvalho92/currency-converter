# Conversor de moedas

#### Resumo

- Back-end
- Rodar Aplicação

## 1 - Back-end

- Back-end feito em [NodeJs]().

##### 1.1 - Tecnologias Usadas

- Servidor feito em [Express](https://expressjs.com/pt-br/)
- Validações de parametros das rotas feito com [Joi(Celebrate)](https://github.com/arb/celebrate)
- Testes feitos com [Jest](https://jestjs.io/docs/en/api)
- Requisições dos Testes e Validações feitas com o [Supertest]

## 2 - Rodar Aplicação

- Para executar a aplicação é necessário instalar o [Node (Versão LTS)](https://nodejs.org/en/)

#### 2.1 - Faça o clone desta aplicação no seu computador

```sh
$ git clone
```

### 2.2 - Execute o comando abaixo no terminal:

```sh
$ npm install
```

### 2.5 - Executar testes

- Criação de usuário
- Conversão de moedas, salvando dados no banco e retornando as informações.

`Execute o comando abaixo`

```sh
$ npm run test
```

## Endpoints:

Heroku: em andamento

### /currency-convert

`[POST] - Realiza a conversão`

```
{
  "body":{
    "origin_currency": "BRL",
    "origin_value": 300.5,
    "destination_currency": "USD"
  }
}
```

Retorno (Ex):

```
{
  "currency_data": {
    "transacion_id": 6,
    "user_id": "edea3ac6",
    "origin_currency": "BRL",
    "origin_value": 300.5,
    "destination_currency": "USD",
    "destination_value": 54.15,
    "currency_tax": 0.180204461,
    "updtime": "Sun, 27 Sep 2020 15:46:02 GMT"
  }
}

```

## Author

👤 **Douglas Carvalho**

- Github: [@dougcarvalho92](https://github.com/dougcarvalho92)
- LinkedIn: [@dscarvalho92](https://linkedin.com/in/dscarvalho92)
