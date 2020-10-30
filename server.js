const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API is up and running')
})

app.listen(PORT, () => `Server started at ${PORT}`);
