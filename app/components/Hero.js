import { connect } from 'react-redux';

import HeroComponent from './HeroComponent';
import HeroInputFormComponent from './HeroInputFormComponent';
import {
  heroThunk,
  addNewHeroThunk,
  removeHeroThunk
} from '../reducers/heroReducer.js';
import { teamThunk } from '../reducers/teamReducer.js';
import { universeThunk } from '../reducers/universeReducer.js';

const mapStateToProps = state => ({
  hero: state.hero,
  team: state.team,
  universe: state.universe,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  retrieveHeroData: () => dispatch(heroThunk()),
  retrieveTeamData: () => dispatch(teamThunk()),
  retrieveUniverseData: () => dispatch(universeThunk()),
  insertHeroData: hero => dispatch(addNewHeroThunk(hero)),
  removeHeroData: id => dispatch(removeHeroThunk(id))
});

const Hero = connect(
  mapStateToProps,
  mapDispatchToProps
)(HeroComponent, HeroInputFormComponent);

export default Hero;
