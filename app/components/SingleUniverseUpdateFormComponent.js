import React, { Component } from 'react';

class SingleUniverseUpdateFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      universeName: this.props.universe.universeKey.universeName,
      universeURL: this.props.universe.universeKey.universeURL,
      loading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    this.setState({ loading: false });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await this.props.updateUniverseData(
      this.state,
      this.props.universe.universeKey.id
    );

    this.setState({
      universeName: this.props.universe.universeKey.universeName,
      universeURL: this.props.universe.universeKey.universeURL
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
          <span className='labelClass'>Universe Name:</span>
          <br />
          <input
            type='text'
            name='universeName'
            className='formField'
            onChange={this.handleChange}
            value={this.state.universeName}
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

export default SingleUniverseUpdateFormComponent;
