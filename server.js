const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = new (require('express'))();
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const loadData = require('./api/loadJson');
const router = require('./api/routes');

const port = 3000;
const mongoUrl = 'mongodb://localhost/book-app';
mongoose.Promise = require('bluebird');
mongoose.connect(mongoUrl);
loadData();


const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use(logger('dev'));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', router);

app.get("/*", function(req, res) {
  res.sendFile(__dirname + '/index.html')
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});