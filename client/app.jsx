import React from 'react';

import Container from './container';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          value: ''
      };
  }

  onValueChange(e) {
    const value = e.target.value;
    console.log('setting state: value', value);
    this.setState({value})
  }

  render() {
    const value = this.state.value;
    return (
      <div>
        <input type="text" value={value} onChange={(e) => this.onValueChange(e)}/>
        <Container someState={value}/>
      </div>
    );
  }
}
