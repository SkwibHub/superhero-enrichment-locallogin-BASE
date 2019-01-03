'use strict';

const router = require('express').Router();
const { Hero, Team, Universe } = require('../db/associations.js');

// Your routes go here!

//GET: Retrieve all team listings
router.get('/', async (req, res) => {
  try {
    const allTeams = await Team.findAll();
    console.log('Getting team data from DB');
    res.json(allTeams);
  } catch (err) {
    console.error(err);
  }
});

//GET: Retrieve one team listings w/ heroes & universe
router.get('/:id', async (req, res) => {
  try {
    console.log('Getting single team plus hero data from DB');

    const thisTeam = await Team.findOne({
      where: {
        id: parseInt(req.params.id)
      }
    });

    const chosenHeroes = await Hero.findAll({
      where: {
        teamName: thisTeam.teamName
      },
      include: [Team]
    });

    const chosenUniverse = await Universe.findAll({
      where: {
        universeName: thisTeam.universeName
      },
      include: [Team]
    });

    const sendTeam = {
      teamKey: thisTeam,
      heroKey: chosenHeroes,
      universeKey: chosenUniverse
    };

    res.json(sendTeam);
  } catch (err) {
    console.error(err);
  }
});

//POST: Add a team listing to DB
router.post('/add', async (req, res) => {
  try {
    await Team.create(req.body);
    console.log('Adding team data to DB');
    res.send('New team added');
  } catch (err) {
    console.error(err);
  }
});

//POST: Delete team from the server.
router.delete('/:id', async (req, res) => {
  try {
    await Team.destroy({
      where: {
        id: parseInt(req.params.id)
      }
    });
    console.log(`Removed team ${req.params.id} data from DB`);
    res.send('Team removed');
  } catch (err) {
    console.error(err);
  }
});

//PUT: Update team on the server.
router.put('/:id', async (req, res) => {
  try {
    await Team.update(req.body, {
      where: {
        id: parseInt(req.params.id)
      }
    });
    console.log(`Updated team ${req.params.id} data from DB`);
    res.send('Team updated');
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
