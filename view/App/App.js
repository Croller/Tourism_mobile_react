import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import { Drawer } from '../../router';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Drawer />
      </Container>
    );
  }
}

export default App;
