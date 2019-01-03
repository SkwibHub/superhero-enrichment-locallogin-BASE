import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleTeamUpdateFormComponent from './SingleTeamUpdateFormComponent.js';

class SingleTeamComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.retrieveSingleTeamData(this.props.location.pathname);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header' />;
    }

    const heroes = this.props.team.heroKey;
    const team = this.props.team.teamKey;

    return (
      <div>
        <div className='teamComponent'>
          <br />
          <h1 className='component-header'>TEAM ROSTER</h1>
          <br />
          <div className='singleTeamContainer'>
            <img className='bigLogo' src={`/images/${team.teamURL}`} />
            <h4 className='singleTeamName'>{team.teamName}</h4>
            <Link to={`/universe/`}>
              <img className='smallLogo' src={`/images/${team.universeURL}`} />
            </Link>
          </div>
          {mapHeroes(heroes)}
        </div>

        <div className='formComponent'>
          <h1 className='component-header'>UPDATE TEAM FORM</h1>
          <div>
            <SingleTeamUpdateFormComponent
              updateTeamData={this.props.updateTeamData}
              retrieveUniverseData={this.props.retrieveUniverseData}
              universe={this.props.universe}
              team={team}
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

const mapHeroes = heroes => {
  if (heroes.length < 1) {
    return (
      <div>
        <h2 className='noListingHere'>No heroes on this team's roster.</h2>
      </div>
    );
  } else {
    return (
      <div>
        {heroes.map(h => (
          <div className='smallHeroContainer' key={'heroimg' + h.id}>
            <div>
              <div>
                <Link to={'/hero/' + h.id} key={'heroname' + h.id}>
                  <img
                    src={`images/${h.imageURL}`}
                    className='smallHeroImage'
                  />
                </Link>
              </div>
              <div>
                <Link
                  to={'/hero/' + h.id}
                  key={'heroname' + h.id}
                  className='smallHeroLinkName'
                >
                  {h.alias}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
};

export default SingleTeamComponent;
