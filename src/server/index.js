const bodyParser = require('body-parser');
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const routes = require('./routes');
const hbsHelpers = require('../views/helpers');

const app = express();
const PORT = 3000;

const hbs = exphbs.create({
  extname: '.html',
  helpers: hbsHelpers,
  partialsDir: path.resolve(__dirname, '../views/partials')
});

app.use('/', routes.homepage);

app.use(bodyParser.json());

app.engine('html', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.resolve(__dirname, '../views'));

app.use(express.static(path.resolve(__dirname, '../public')));

if (!module.parent) {
  app.listen(PORT, () => console.log(`App is running in http://localhost:${PORT}`)) 
}

module.exports = app;
