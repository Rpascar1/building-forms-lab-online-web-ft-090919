import React, { Component } from 'react';


export default class Bands extends Component {

  renderBands = () => this.props.bands.map((band, index) => {
      return <li key={index}>{band.name}</li>
    })

  render() {

    return (
      <div>{this.renderBands()}</div>
    );
  }

}
