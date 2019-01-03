const db = require('./database');
const Sequelize = require('sequelize');

const Team = db.define('team', {
  teamName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  teamURL: {
    type: Sequelize.STRING,
    allowNull: false,
    imageURL: 'unaffiliated.png'
  },
  universeURL: {
    type: Sequelize.STRING,
    allowNull: false,
    imageURL: 'unaffiliated.png'
  },
  universeName: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Team;
