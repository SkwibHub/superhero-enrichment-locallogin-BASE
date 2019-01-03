import { connect } from 'react-redux';

import SingleUniverseComponent from './SingleUniverseComponent';
import SingleUniverseUpdateFormComponent from './SingleUniverseUpdateFormComponent';
import {
  singleUniverseThunk,
  updateUniverseThunk
} from '../reducers/universeReducer.js';
import { heroThunk } from '../reducers/heroReducer.js';

const mapStateToProps = state => ({
  hero: state.hero,
  universe: state.universe
});

const mapDispatchToProps = dispatch => ({
  retrieveSingleUniverseData: id => dispatch(singleUniverseThunk(id)),
  retrieveHeroData: () => dispatch(heroThunk()),
  updateUniverseData: (universe, id) =>
    dispatch(updateUniverseThunk(universe, id))
});

const Universe = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleUniverseComponent, SingleUniverseUpdateFormComponent);

export default Universe;
