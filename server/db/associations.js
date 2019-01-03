'use strict';

const db = require('./database');

const Team = require('./Team.js');
const Hero = require('./Hero.js');
const Universe = require('./Universe.js');
const User = require('./User.js');

Hero.belongsTo(Team);
Hero.belongsTo(Universe);
Team.hasMany(Hero);
Team.belongsTo(Universe);
Universe.hasMany(Hero);
Universe.hasMany(Team);

console.log('Set associations');

module.exports = {
  db,
  Team,
  Hero,
  Universe,
  User
};
