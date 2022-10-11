const express = require('express');
const bodyparser = require('body-parser');
const route = require('./Routes/routing');

const app = express();
app.use(bodyparser.json());

var cors = require('cors');
app.use(cors());

app.use('/', route);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});