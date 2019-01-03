'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const session = require('express-session');

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// Session middleware
app.use(
  session({
    secret: 'SUPERHEROES',
    resave: false,
    saveUninitialized: false
  })
);

// authentication router
app.use('/auth', require('./auth'));

app.use('/api/hero', require('./api/heroRoutes.js'));
app.use('/api/team', require('./api/teamRoutes.js'));
app.use('/api/universe', require('./api/universeRoutes.js'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
