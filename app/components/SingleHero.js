import { connect } from 'react-redux';

import SingleHeroComponent from './SingleHeroComponent';
import SingleHeroUpdateFormComponent from './SingleHeroUpdateFormComponent';
import { singleHeroThunk, updateHeroThunk } from '../reducers/heroReducer.js';
import { universeThunk } from '../reducers/universeReducer.js';
import { teamThunk } from '../reducers/teamReducer.js';

const mapStateToProps = state => ({
  hero: state.hero,
  team: state.team,
  universe: state.universe
});

const mapDispatchToProps = dispatch => ({
  retrieveSingleHeroData: id => dispatch(singleHeroThunk(id)),
  retrieveUniverseData: () => dispatch(universeThunk()),
  retrieveTeamData: () => dispatch(teamThunk()),
  updateHeroData: (hero, id) => dispatch(updateHeroThunk(hero, id))
});

const Hero = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleHeroComponent, SingleHeroUpdateFormComponent);

export default Hero;
