const db = require('./server/db/database.js');
const { Hero, Team, Universe, User } = require('./server/db/associations.js');

const { green, red } = require('chalk');

db.sync({ force: true })

  // seed your database here!
  .then(() => {
    return Promise.all([
      Team.create({
        teamName: 'Avengers',
        teamURL: 'avengers-logo.png',
        universeURL: 'marveluniverse.png',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'X-Men',
        teamURL: 'xmenteam.png',
        universeURL: 'marveluniverse.png',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'Fantastic Four',
        teamURL: 'fant4-logo.png',
        universeURL: 'marveluniverse.png',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'Unaffiliated',
        teamURL: 'unaffiliated.png',
        universeURL: 'marveluniverse.png',
        universeName: 'Marvel'
      }),
      Team.create({
        teamName: 'Justice League',
        teamURL: 'JL-logo.png',
        universeURL: 'DC-universe.png',
        universeName: 'DC'
      }),
      Team.create({
        teamName: 'Suicide Squad',
        teamURL: 'suicide-squad.png',
        universeURL: 'DC-universe.png',
        universeName: 'DC'
      })
    ]);
  })
  .then(() => {
    return Promise.all([
      Hero.create({
        alias: 'Captain America',
        name: 'Steve Rogers',
        email: 'steverogers@avengers.com',
        imageURL: 'captamerica.png',
        teamURL: 'avengers-logo.png',
        universeURL: 'marveluniverse.png',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Iron Man',
        name: 'Tony Stark',
        email: 'tonystark@avengers.com',
        imageURL: 'ironman.png',
        teamURL: 'avengers-logo.png',
        universeURL: 'marveluniverse.png',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Thor',
        name: 'Odinson',
        email: 'thor@avengers.com',
        imageURL: 'thor.png',
        teamURL: 'avengers-logo.png',
        universeURL: 'marveluniverse.png',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Spider-Man',
        name: 'Peter Parker',
        email: 'peterparker@avengers.com',
        imageURL: 'spiderman.png',
        teamURL: 'avengers-logo.png',
        universeURL: 'marveluniverse.png',
        teamName: 'Avengers',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Cyclops',
        name: 'Scott Summers',
        email: 'scottsummers@xmen.com',
        imageURL: 'cyclops.png',
        teamURL: 'xmenteam.png',
        universeURL: 'marveluniverse.png',
        teamName: 'X-Men',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Professor X',
        name: 'Charles Xavier',
        email: 'charlesxavier@xmen.com',
        imageURL: 'professorx.png',
        teamURL: 'xmenteam.png',
        universeURL: 'marveluniverse.png',
        teamName: 'X-Men',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Thing',
        name: 'Ben Grimm',
        email: 'thing@fantasticfour.com',
        imageURL: 'thing.png',
        teamURL: 'fant4-logo.png',
        universeURL: 'marveluniverse.png',
        teamName: 'Fantastic Four',
        universeName: 'Marvel'
      }),
      Hero.create({
        alias: 'Superman',
        name: 'Clark Kent',
        email: 'clarkkent@justiceleague.com',
        imageURL: 'superman.png',
        teamURL: 'JL-logo.png',
        universeURL: 'DC-universe.png',
        teamName: 'Justice League',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Batman',
        name: 'Bruce Wayne',
        email: 'brucewayne@justiceleague.com',
        imageURL: 'batman.png',
        teamURL: 'JL-logo.png',
        universeURL: 'DC-universe.png',
        teamName: 'Justice League',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Wonder Woman',
        name: 'Diana Prince',
        email: 'dianaprince@justiceleague.com',
        imageURL: 'wonderwoman.png',
        teamURL: 'JL-logo.png',
        universeURL: 'DC-universe.png',
        teamName: 'Justice League',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Harley Quinn',
        name: 'Dr. Harleen Frances Quinzel',
        email: 'harleyquinn@suicidesquad.com',
        imageURL: 'harleyquinn.png',
        teamURL: 'suicide-squad.png',
        universeURL: 'DC-universe.png',
        teamName: 'Suicide Squad',
        universeName: 'DC'
      }),
      Hero.create({
        alias: 'Deadshot',
        name: 'Floyd Lawton',
        email: 'deadshot@suicidesquad.com',
        imageURL: 'deadshot.png',
        teamURL: 'suicide-squad.png',
        universeURL: 'DC-universe.png',
        teamName: 'Suicide Squad',
        universeName: 'DC'
      })
    ]);
  })
  .then(() => {
    return Promise.all([
      Universe.create({
        universeName: 'Marvel',
        universeURL: 'marveluniverse.png'
      }),
      Universe.create({
        universeName: 'DC',
        universeURL: 'DC-universe.png'
      })
    ]);
  })
  .then(() => {
    return Promise.all([
      User.create({
        email: 'cody@email.com',
        password: '12345',
        imageUrl: 'unaffiliated.png'
      }),
      User.create({
        email: 'superhero@email.com',
        password: '12345',
        imageUrl: 'unaffiliated.png'
      })
    ]);
  })
  .then(() => {
    console.log(green('SEED WITH HERO SPEED!'));
    db.close();
  })
  .catch(err => {
    console.log(red('ERROR! OH THANOS SNAP!'));
    console.log(err.stack);
    db.close();
  });
