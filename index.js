const express = require("express");
const products = require('./products')
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Welcome to online shop api")
})

app.get('/products', (req, res) => {
    res.send(products)
})

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
