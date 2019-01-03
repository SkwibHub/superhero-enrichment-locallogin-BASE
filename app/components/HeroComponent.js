import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import HeroInputFormComponent from './HeroInputFormComponent.js';

class HeroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.retrieveHeroData();
    this.setState({ loading: false });
  }

  async handleSubmit(id) {
    event.preventDefault();
    await this.props.removeHeroData(id);
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header' />;
    }

    if (!this.props.user.user.id) {
      return <Redirect to='/' />;
    }

    if (this.props.hero.length < 1) {
      return (
        <div>
          <div className='teamComponent'>
            <br />
            <br />
            <h2 className='noListingHere'>No heroes in this database.</h2>
          </div>
          <div className='formComponent'>
            <h1 className='component-header'>NEW HERO FORM</h1>
            <div>
              <HeroInputFormComponent
                insertHeroData={this.props.insertHeroData}
                retrieveTeamData={this.props.retrieveTeamData}
                retrieveUniverseData={this.props.retrieveUniverseData}
                universe={this.props.universe}
                team={this.props.team}
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
          <h1 className='component-header'>SUPER HEROES</h1>
          {this.props.hero.map(h => (
            <div className='teamContainer' key={'div' + h.id}>
              <div>
                <Link
                  to={`/hero/${h.id}`}
                  key={'name' + h.id}
                  className='teamLinkName'
                >
                  <img
                    src={`images/${h.imageURL}`}
                    key={'heroimage' + h.id}
                    className='bigLogo'
                  />
                </Link>
              </div>
              <div>
                <Link
                  to={`/hero/${h.id}`}
                  key={'name' + h.id}
                  className='teamLinkName'
                >
                  {`  ${h.alias}`}
                </Link>
              </div>
              <div className='smallHeroDiv'>
                <Link to={`/team/`}>
                  <img
                    src={`images/${h.teamURL}`}
                    key={'imgTeam' + h.id}
                    className='smallHeroLogo'
                  />
                </Link>
                <Link to={`/universe/`}>
                  <img
                    src={`images/${h.universeURL}`}
                    key={'imgUniverse' + h.id}
                    className='smallHeroLogo'
                  />
                </Link>
              </div>
              <div>
                <button
                  type='submit'
                  className='deleteButton'
                  onClick={() => this.handleSubmit(h.id)}
                  value={h.id}
                  key={'button' + h.id}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='formComponent'>
          <h1 className='component-header'>NEW HERO FORM</h1>
          <div>
            <HeroInputFormComponent
              insertHeroData={this.props.insertHeroData}
              retrieveTeamData={this.props.retrieveTeamData}
              retrieveUniverseData={this.props.retrieveUniverseData}
              universe={this.props.universe}
              team={this.props.team}
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

export default HeroComponent;
