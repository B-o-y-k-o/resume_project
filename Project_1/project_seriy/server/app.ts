// За счет этого модуля будет извлечено все тело пришедшего запроса, а  его данные преобразованы в JSON-объект, с которым мы можем работать.
const bodyParser = require("body-parser");

// для обхода защиты по портам
const cors = require('cors');

// подключение к роутерс
const routes = require('./routes/routes.ts');

// Require packages and set the port
const express = require("express");
const port = 3000;
const app = express();

// для обхода защиты по портам
app.use(cors({
    origin: '*',
}))

// Затем мы укажем нашему приложению Express, что необходимо использовать body-parser и преобразовывать данные в формат JSON.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}))


// Реакция на получение ГЕТ запроса проходит через роутерс
routes(app);

// Start server
const server = app.listen(port, (err) => {
  if (err) return console.log(`Error: ${err}`);
  console.log(`Server listening on port ${server.address().port}`);
});
