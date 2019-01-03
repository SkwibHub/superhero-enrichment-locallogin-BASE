import React, { Component } from 'react';

class SingleTeamUpdateFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teamName: this.props.team.teamName,
      teamURL: this.props.team.teamURL,
      universeName: this.props.team.universeName,
      universeURL: '',
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    await this.props.retrieveUniverseData();
    this.setState({ loading: false });
  }

  URLassign(team, universe) {
    const filteredTeam = universe.filter(u =>
      u.universeName === team.universeName ? true : false
    );
    const revisedTeam = Object.assign({}, team, {
      universeURL: filteredTeam[0].universeURL
    });
    if (revisedTeam.teamURL === '') {
      revisedTeam.teamURL = 'unaffiliated.png';
    }
    return revisedTeam;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const assignedState = this.URLassign(this.state, this.props.universe);
    await this.props.updateTeamData(assignedState, this.props.team.id);

    this.setState({
      teamName: this.props.team.teamName,
      teamURL: this.props.team.teamURL,
      universeName: this.props.team.universeName
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
          <span className='labelClass'>Team Name:</span>
          <br />
          <input
            type='text'
            name='teamName'
            className='formField'
            onChange={this.handleChange}
            value={this.state.teamName}
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>Team Image URL:</span>
          <br />
          <input
            type='text'
            name='teamURL'
            className='formField'
            onChange={this.handleChange}
            value={this.state.teamURL}
          />
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

export default SingleTeamUpdateFormComponent;
