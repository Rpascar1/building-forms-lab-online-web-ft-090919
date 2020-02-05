// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = { name: ''}

  onInputChange = e => {
    this.setState({name: e.target.value})
  }

  handleOnSubmit(e) {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }
  render() {
    return(
      <div>
      <form onSubmit={e => this.handleOnSubmit(e)}>
        <input onChange={this.onInputChange} type='text' value={this.state.name} />
        <input type="submit"  />
        </form>
      </div>
    )
  }
}

export default BandInput
