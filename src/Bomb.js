// your Bomb code here!
import React, {Component} from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super()
    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {
    const renderBomb = () => {
      if (this.state.secondsLeft <= 0)
        return (
          <div>Boom!</div>
        )      
      else {
        this.setState({
          secondsLeft: this.state.secondsLeft - 1
        });
        return (
          <div>{this.state.secondsLeft} seconds left before I go boom!</div>
        );
        }
    }
    return renderBomb();   
  }

}