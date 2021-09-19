const express = require('express');
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
  console.log('\nServer is ready:', `\x1b[34mhttp://localhost:${PORT}`);
});

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});
