const express = require('express');
const cors = require('cors');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const fs = require('fs');

const indexRouter = require('./routes/index');
const genesRouter = require('./routes/genes');
const config = require('./config/config.json');
const GenesDB = require('./datastore/genes-db');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

console.log('loading variants:', config.variants_tsv);
const stream = fs.createReadStream(config.variants_tsv);
const genesDB = new GenesDB();

app.use('/genes', genesRouter(genesDB));

genesDB.loadFromTSV(stream).then(() => {
  console.log(`Loaded ${genesDB.genes.size} genes`);

  console.log('Listening on port 8080');
  app.listen(8080);
});

module.exports = app;
