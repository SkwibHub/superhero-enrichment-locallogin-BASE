'use strict';

const router = require('express').Router();
const { Hero, Team, Universe } = require('../db/associations.js');

// Your routes go here!

//GET: Retrieve all universe listings
router.get('/', async (req, res) => {
  try {
    const allUniverses = await Universe.findAll();
    console.log('Getting Universe data from DB');
    res.json(allUniverses);
  } catch (err) {
    console.error(err);
  }
});

//GET: Retrieve one universe listing w/ heroes & teams
router.get('/:id', async (req, res) => {
  try {
    console.log('Getting single universe plus hero data from DB');

    const thisUniverse = await Universe.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    });

    const chosenHeroes = await Hero.findAll({
      where: {
        universeName: thisUniverse.universeName
      },
      include: [Universe]
    });

    const chosenTeams = await Team.findAll({
      where: {
        universeName: thisUniverse.universeName
      },
      include: [Universe]
    });

    const sendUniverse = {
      universeKey: thisUniverse,
      heroKey: chosenHeroes,
      teamKey: chosenTeams
    };

    res.json(sendUniverse);
  } catch (err) {
    console.error(err);
  }
});

//POST: Add a universe listing to DB
router.post('/add', async (req, res) => {
  try {
    await Universe.create(req.body);
    console.log('Adding universe data to DB');
    res.send('New universe added');
  } catch (err) {
    console.error(err);
  }
});

//POST: Delete universe from the server.
router.delete('/:id', async (req, res) => {
  try {
    await Universe.destroy({
      where: {
        id: parseInt(req.params.id)
      }
    });
    console.log(`Removed universe ${req.params.id} data from DB`);
    res.send('Universe removed');
  } catch (err) {
    console.error(err);
  }
});

//PUT: Update universe on the server.
router.put('/:id', async (req, res) => {
  try {
    await Universe.update(req.body, {
      where: {
        id: parseInt(req.params.id)
      }
    });
    console.log(`Updated universe ${req.params.id} data from DB`);
    res.send('Universe updated');
  } catch (err) {
    console.error(err);
  }
});

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
