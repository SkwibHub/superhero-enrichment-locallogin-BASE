import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import UniverseInputFormComponent from './UniverseInputFormComponent.js';

class UniverseComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.retrieveUniverseData();
    this.setState({ loading: false });
  }

  async handleSubmit(id) {
    event.preventDefault();
    await this.props.removeUniverseData(id);
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header' />;
    }

    if (!this.props.user.user.id) {
      return <Redirect to='/' />;
    }

    if (this.props.universe.length < 1) {
      return (
        <div>
          <div className='teamComponent'>
            <br />
            <br />
            <h2 className='noListingHere'>No universes in this database.</h2>
          </div>
          <div className='formComponent'>
            <h1 className='component-header'>NEW UNIVERSE FORM</h1>
            <div>
              <UniverseInputFormComponent
                insertUniverseData={this.props.insertUniverseData}
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
          <h1 className='component-header'>UNIVERSES</h1>
          {this.props.universe.map(u => (
            <div className='teamContainer' key={'div' + u.id}>
              <div>
                <Link
                  to={`/universe/${u.id}`}
                  key={'name' + u.id}
                  className='teamLinkName'
                >
                  <img
                    src={`images/${u.universeURL}`}
                    key={'universeimage' + u.id}
                    className='bigLogo'
                  />
                </Link>
              </div>
              <div>
                <Link
                  to={`/universe/${u.id}`}
                  key={'name' + u.id}
                  className='teamLinkName'
                >
                  {`  ${u.universeName}`}
                </Link>
              </div>
              <div>
                <button
                  type='submit'
                  className='deleteButton'
                  onClick={() => this.handleSubmit(u.id)}
                  value={u.id}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className='formComponent'>
          <h1 className='component-header'>NEW UNIVERSE FORM</h1>
          <div>
            <UniverseInputFormComponent
              insertUniverseData={this.props.insertUniverseData}
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

export default UniverseComponent;
