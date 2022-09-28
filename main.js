const Connection = require('./server/Connection.js');
const HttpServer = require('./server/HttpServer.js');
const LancamentoController = require('./server/LancamentoController.js');
const LancamentoData = require('./server/LancamentoData.js');

const connection = new Connection();
const lancamentoData = new LancamentoData(connection);
const httpServer = new HttpServer();
new LancamentoController(httpServer, lancamentoData);
httpServer.listen(3000);
