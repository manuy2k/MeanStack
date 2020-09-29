const http = require('http');

const app = require('./backend/app');

const _port = 3000;
app.set('port', _port);

const server = http.createServer(app);

server.listen(_port);
