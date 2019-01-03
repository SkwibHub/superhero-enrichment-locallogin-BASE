'use strict';

const router = require('express').Router();
const { Hero, Team, Universe } = require('../db/associations.js');

// Your routes go here!

//GET: Retrieve all hero listings
router.get('/', async (req, res) => {
  try {
    const allHeroes = await Hero.findAll();
    console.log('Getting hero data from DB');
    res.json(allHeroes);
  } catch (err) {
    console.error(err);
  }
});

//GET: Retrieve one hero listing w/ team & universe
router.get('/:id', async (req, res) => {
  try {
    const thisHero = await Hero.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    });

    const thisTeam = await Team.findOne({
      where: {
        teamName: thisHero.teamName
      }
    });

    const thisUniverse = await Universe.findOne({
      where: {
        universeName: thisHero.universeName
      }
    });

    const sendHero = {
      teamKey: thisTeam,
      heroKey: thisHero,
      universeKey: thisUniverse
    };

    res.json(sendHero);
  } catch (err) {
    console.error(err);
  }
});

//POST: Add a hero listing to DB
router.post('/add', async (req, res) => {
  try {
    await Hero.create(req.body);
    console.log('Adding hero data to DB');
    res.send('New hero added');
  } catch (err) {
    console.error(err);
  }
});

//DELETE: Delete hero from the server.
router.delete('/:id', async (req, res) => {
  try {
    await Hero.destroy({
      where: {
        id: parseInt(req.params.id)
      }
    });
    console.log(`Removed hero ${req.params.id} data from DB`);
    res.send('Hero removed');
  } catch (err) {
    console.error(err);
  }
});

//PUT: Update hero on the server.
router.put('/:id', async (req, res) => {
  try {
    await Hero.update(req.body, {
      where: {
        id: parseInt(req.params.id)
      }
    });
    console.log(`Updated hero ${req.params.id} data from DB`);
    res.send('Hero updated');
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
