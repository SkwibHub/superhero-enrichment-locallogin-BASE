import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar.js';
import Team from './Team.js';
import SingleTeam from './SingleTeam.js';
import Hero from './Hero.js';
import SingleHero from './SingleHero.js';
import Universe from './Universe.js';
import SingleUniverse from './SingleUniverse.js';

const Root = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <h1 className='superhero-subheader'>
          Your comic book character database!!
        </h1>
        <Switch>
          <Route exact path='/team' component={Team} />
          <Route exact path='/team/:id' component={SingleTeam} />
          <Route exact path='/hero' component={Hero} />
          <Route exact path='/hero/:id' component={SingleHero} />
          <Route exact path='/universe' component={Universe} />
          <Route exact path='/universe/:id' component={SingleUniverse} />
          {/*<Redirect to='/' component={Hero} /> */}
        </Switch>
      </main>
    </div>
  );
};

export default Root;
