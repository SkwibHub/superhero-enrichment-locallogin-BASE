const db = require('./database');
const Sequelize = require('sequelize');

const Universe = db.define('universe', {
  universeName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  universeURL: {
    type: Sequelize.STRING,
    allowNull: false,
    imageURL: 'unaffiliated.png'
  }
});

module.exports = Universe;
