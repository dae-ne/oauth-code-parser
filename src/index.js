const express = require('express');
const app = express();

const PORT = 3001;

app.use(express.static(__dirname + '/static'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(PORT, () => {
  console.log('\nServer is running: \x1b[34m%s\x1b[0m', `http://localhost:${PORT}`);
});
