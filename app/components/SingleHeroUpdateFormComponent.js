import React, { Component } from 'react';

class SingleHeroUpdateFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: this.props.hero.heroKey.alias,
      name: this.props.hero.heroKey.name,
      email: this.props.hero.heroKey.email,
      imageURL: this.props.hero.heroKey.imageURL,
      teamURL: '',
      universeURL: '',
      teamName: this.props.hero.heroKey.teamName,
      universeName: this.props.hero.heroKey.universeName,
      loading: true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.retrieveTeamData();
    await this.props.retrieveUniverseData();
    this.setState({ loading: false });
  }

  URLassign(hero, universe, team) {
    const filteredHeroUniv = universe.filter(u =>
      u.universeName === hero.universeName ? true : false
    );
    const filteredHeroTeam = team.filter(t =>
      t.teamName === hero.teamName ? true : false
    );
    const revisedHero = Object.assign({}, hero, {
      universeURL: filteredHeroUniv[0].universeURL,
      teamURL: filteredHeroTeam[0].teamURL
    });
    if (revisedHero.imageURL === '') {
      revisedHero.imageURL = 'unaffiliated.png';
    }
    return revisedHero;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const assignedState = this.URLassign(
      this.state,
      this.props.universe,
      this.props.team
    );
    await this.props.updateHeroData(assignedState, this.props.hero.heroKey.id);

    this.setState({
      alias: this.props.hero.heroKey.alias,
      name: this.props.hero.heroKey.name,
      email: this.props.hero.heroKey.email,
      imageURL: this.props.hero.heroKey.imageURL,
      teamURL: '',
      universeURL: '',
      teamName: this.props.hero.heroKey.teamName,
      universeName: this.props.hero.heroKey.universeName
    });
  }

  render() {
    if (this.state.loading) {
      return <div className='superhero-header' />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <br />
        <label>
          <span className='labelClass'>*Hero's Alias:</span>
          <br />
          <input
            type='text'
            name='alias'
            className='formField'
            onChange={this.handleChange}
            value={this.state.alias}
            required
            aria-required='true'
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>*Hero's Real Name:</span>
          <br />
          <input
            type='text'
            name='name'
            className='formField'
            onChange={this.handleChange}
            value={this.state.name}
            required
            aria-required='true'
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>*Hero's Contact Email:</span>
          <br />
          <input
            type='text'
            name='email'
            className='formField'
            onChange={this.handleChange}
            value={this.state.email}
            required
            aria-required='true'
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>Hero Image URL:</span>
          <br />
          <input
            type='text'
            name='imageURL'
            className='formField'
            onChange={this.handleChange}
            value={this.state.imageURL}
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>Team:</span>
          <br />
          <select
            type='text'
            name='teamName'
            className='formField'
            onChange={this.handleChange}
            value={this.state.teamName}
            required
            aria-required='true'
          >
            <option value=''>Select a Team</option>
            {this.props.team.map(t => (
              <option key={t.id} value={t.teamName}>
                {t.teamName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>Universe:</span>
          <br />
          <select
            type='text'
            name='universeName'
            className='formField'
            onChange={this.handleChange}
            value={this.state.universeName}
            required
            aria-required='true'
          >
            <option value=''>Select a Universe</option>
            {this.props.universe.map(u => (
              <option key={u.id} value={u.universeName}>
                {u.universeName}
              </option>
            ))}
          </select>
        </label>
        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default SingleHeroUpdateFormComponent;
