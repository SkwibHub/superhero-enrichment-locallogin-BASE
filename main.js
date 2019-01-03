'use strict';

const { db } = require('./server/db/associations.js');
const app = require('./server/index.js');
const PORT = 1337;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`Heroically serving on ${PORT}`));
  });
