const db = require('./database');
const Sequelize = require('sequelize');

const Hero = db.define('hero', {
  alias: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    allowNull: false,
    imageURL: 'unaffiliated.png'
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
  teamName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  },
  universeName: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: ''
  }
});

module.exports = Hero;
