import { connect } from 'react-redux';

import UniverseComponent from './UniverseComponent';
import UniverseInputFormComponent from './UniverseInputFormComponent';
import {
  universeThunk,
  addNewUniverseThunk,
  removeUniverseThunk
} from '../reducers/universeReducer.js';
import { heroThunk } from '../reducers/heroReducer.js';

const mapStateToProps = state => ({
  hero: state.hero,
  universe: state.universe,
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  retrieveUniverseData: () => dispatch(universeThunk()),
  retrieveHeroData: () => dispatch(heroThunk()),
  insertUniverseData: Universe => dispatch(addNewUniverseThunk(Universe)),
  removeUniverseData: id => dispatch(removeUniverseThunk(id))
});

const Universe = connect(
  mapStateToProps,
  mapDispatchToProps
)(UniverseComponent, UniverseInputFormComponent);

export default Universe;
