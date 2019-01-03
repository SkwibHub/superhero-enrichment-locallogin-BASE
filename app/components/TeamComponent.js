import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import TeamInputFormComponent from './TeamInputFormComponent.js';

class TeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.retrieveTeamData();
    this.setState({ loading: false });
  }

  async handleSubmit(id) {
    event.preventDefault();
    await this.props.removeTeamData(id);
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header' />;
    }

    if (!this.props.user.user.id) {
      return <Redirect to='/' />;
    }

    if (this.props.team.length < 1) {
      return (
        <div>
          <div className='teamComponent'>
            <br />
            <br />
            <h2 className='noListingHere'>No teams in this database.</h2>
          </div>
          <div className='formComponent'>
            <h1 className='component-header'>NEW TEAM FORM</h1>
            <div>
              <TeamInputFormComponent
                insertTeamData={this.props.insertTeamData}
                retrieveUniverseData={this.props.retrieveUniverseData}
                universe={this.props.universe}
              />
            </div>
            <div>
              <img src='images/unaffiliated.png' className='formImage' />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className='teamComponent'>
          <br />
          <h1 className='component-header'>SUPER TEAMS</h1>
          {this.props.team.map(t => (
            <div className='teamContainer' key={'div' + t.id}>
              <div>
                <Link to={`/team/${t.id}`} key={'logoname' + t.id}>
                  <img
                    src={`images/${t.teamURL}`}
                    key={'teamimage' + t.id}
                    className='bigLogo'
                  />
                </Link>
              </div>
              <div>
                <Link
                  to={`/team/${t.id}`}
                  key={'name' + t.id}
                  className='teamLinkName'
                >
                  {`  ${t.teamName}`}
                </Link>
              </div>
              <div>
                <Link to={`/universe/`}>
                  <img
                    src={`images/${t.universeURL}`}
                    key={'img' + t.id}
                    className='smallLogo'
                  />
                </Link>
              </div>
              <div>
                <button
                  type='submit'
                  className='deleteButton'
                  onClick={() => this.handleSubmit(t.id)}
                  value={t.id}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='formComponent'>
          <h1 className='component-header'>NEW TEAM FORM</h1>
          <div>
            <TeamInputFormComponent
              insertTeamData={this.props.insertTeamData}
              retrieveUniverseData={this.props.retrieveUniverseData}
              universe={this.props.universe}
            />
          </div>
          <div>
            <img src='images/unaffiliated.png' className='formImage' />
          </div>
        </div>
      </div>
    );
  }
}

export default TeamComponent;
