import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleHeroUpdateFormComponent from './SingleHeroUpdateFormComponent.js';

class SingleHeroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.retrieveSingleHeroData(this.props.location.pathname);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header' />;
    }

    const hero = this.props.hero.heroKey;

    return (
      <div>
        <div className='teamComponent'>
          <br />
          <h1 className='component-header'>TEAM ROSTER</h1>
          <br />
          <div className='singleTeamContainer'>
            <img className='bigLogo' src={`/images/${hero.imageURL}`} />
            <h4 className='singleTeamName'>{hero.alias}</h4>
            <h4 className='singleTeamNameSmaller'>{hero.name}</h4>
            <h4 className='singleTeamNameSmaller'>{hero.email}</h4>
            <div className='smallHeroDiv'>
              <Link to={`/team/`}>
                <img src={`images/${hero.teamURL}`} className='smallHeroLogo' />
              </Link>
              <Link to={`/universe/`}>
                <img
                  src={`images/${hero.universeURL}`}
                  className='smallHeroLogo'
                />
              </Link>
            </div>
          </div>
        </div>

        <div className='formComponent'>
          <h1 className='component-header'>UPDATE HERO FORM</h1>
          <div>
            <SingleHeroUpdateFormComponent
              updateHeroData={this.props.updateHeroData}
              retrieveUniverseData={this.props.retrieveUniverseData}
              retrieveTeamData={this.props.retrieveTeamData}
              universe={this.props.universe}
              team={this.props.team}
              hero={this.props.hero}
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

export default SingleHeroComponent;
