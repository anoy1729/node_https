const express = require('express');
const app = express();

app.use(express.static('public'));

app.use((req, res, next) => {
  console.log(`Received ${req.method} request for ${req.url}`);
  next();
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
