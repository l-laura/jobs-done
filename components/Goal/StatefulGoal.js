import React, { Component } from 'react';
import { Step } from '.';

export class StatefulGoal extends Component {
  state = {
    state: 'active'
  };

  handleSelect = () => {
    this.setState({
      state: this.state.state === 'active' ? 'checked' : 'active'
    });
  };

  render() {
    return (
      <Goal
        stepIndex={0}
        goal={{
          name: 'Meditate',
          forms: [ 
            {
              whenSet: 'Hold a meditation session',
              whenDone: 'Took time to meditate?'
            }
          ]
        }}
        state={this.state.state}
        onSelect={this.handleSelect}
        mobileViewport={true}
      />
    );
  }
}
