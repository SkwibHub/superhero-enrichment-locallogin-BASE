import { connect } from 'react-redux';

import SingleTeamComponent from './SingleTeamComponent';
import SingleTeamUpdateFormComponent from './SingleTeamUpdateFormComponent';
import { singleTeamThunk, updateTeamThunk } from '../reducers/teamReducer.js';
import { universeThunk } from '../reducers/universeReducer.js';

const mapStateToProps = state => ({
  team: state.team,
  universe: state.universe
});

const mapDispatchToProps = dispatch => ({
  retrieveSingleTeamData: id => dispatch(singleTeamThunk(id)),
  retrieveUniverseData: () => dispatch(universeThunk()),
  updateTeamData: (team, id) => dispatch(updateTeamThunk(team, id))
});

const Team = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleTeamComponent, SingleTeamUpdateFormComponent);

export default Team;
