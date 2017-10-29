const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

const bookRouter = express.Router();

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('hello rest');
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
