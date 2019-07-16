const express = require('express');

const app = express();
const port = 3001;
const db = require('../database/index.js');

app.use('/:product_id', express.static('./client/dist'));

app.get('/api/:product_id', (req, res) => {
  const id = req.params.product_id;
  db.getAllPhotos(id)
    .then(urls => res.send(urls).end())
    .catch(err => console.log(err));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
