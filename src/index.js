const connectLiveReload = require("connect-livereload");
const express = require('express');
const livereload = require("livereload");

const PORT = 3001;

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

const app = express();

app.use(connectLiveReload());

app.use(express.static(__dirname + '/static'));

app.get('/', (_, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

app.listen(PORT, () => {
  console.log('Server is running: \x1b[34m%s\x1b[0m', `http://localhost:${PORT}`);
});
