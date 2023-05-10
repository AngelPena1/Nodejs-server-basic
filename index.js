const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  })
);

app.use(express.json({ limit: "50mb" }));
app.use(express.json());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('Hola Mundo, el nuevo resurgir')
})

app.listen(process.env.PORT || 8000, () => {
  console.log(`Server running on port ${process.env.PORT || 8000}`);
});

