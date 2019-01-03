import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SingleUniverseUpdateFormComponent from './SingleUniverseUpdateFormComponent.js';

class SingleUniverseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  async componentDidMount() {
    await this.props.retrieveSingleUniverseData(this.props.location.pathname);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header' />;
    }

    const heroes = this.props.universe.heroKey;
    const universe = this.props.universe.universeKey;

    return (
      <div>
        <div className='teamComponent'>
          <br />
          <h1 className='component-header'>HEROES IN THIS UNIVERSE</h1>
          <br />
          <div className='singleTeamContainer'>
            <img className='bigLogo' src={`/images/${universe.universeURL}`} />
            <h4 className='singleTeamName'>{universe.universeName}</h4>
          </div>
          {mapHeroes(heroes)}
        </div>

        <div className='formComponent'>
          <h1 className='component-header'>UPDATE UNIVERSE</h1>
          <div>
            <SingleUniverseUpdateFormComponent
              universe={this.props.universe}
              updateUniverseData={this.props.updateUniverseData}
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
        <h2 className='noListingHere'>No heroes in this universe.</h2>
      </div>
    );
  } else {
    return (
      <div>
        {heroes.map(h => (
          <div className='smallHeroContainer' key={'herodiv' + h.id}>
            <div>
              <div>
                <Link to={'/hero/' + h.id} key={'heroimg' + h.id}>
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

export default SingleUniverseComponent;
