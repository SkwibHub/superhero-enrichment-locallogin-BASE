import React, { Component } from 'react';

class UniverseInputFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universeName: '',
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

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (this.state.universeURL === '') {
      this.state.universeURL = 'unaffiliated.png';
    }
    await this.props.insertUniverseData(this.state);

    this.setState({
      universeName: '',
      universeURL: ''
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
          <span className='labelClass'>*Universe Name:</span>
          <br />
          <input
            type='text'
            name='universeName'
            className='formField'
            onChange={this.handleChange}
            value={this.state.universeName}
            required
            aria-required='true'
          />
        </label>
        <br />
        <br />
        <label>
          <span className='labelClass'>Universe Image URL:</span>
          <br />
          <input
            type='text'
            name='universeURL'
            className='formField'
            onChange={this.handleChange}
            value={this.state.universeURL}
          />
        </label>

        <br />
        <br />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

export default UniverseInputFormComponent;
