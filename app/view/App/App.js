import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {
  Container,
  Button,
  Footer,
  FooterTab
} from 'native-base';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Drawer from '../../router';


class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>

        <Drawer />
        <Footer style={styles.footer}>
          <FooterTab>
            <Button style={styles.btn}>
              <IconFA name="home" size={20} color="#757575" />
            </Button>
            <Button style={styles.btn}>
              <IconFA name="map" size={20} color="#757575" />
            </Button>
            {/* <Button active>
              <Icon active name="map" />
            </Button> */}
            <Button style={styles.btn}>
              <IconMCI name="account" size={25} color="#757575" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  // footer: {
  //   backgroundColor: '#f9f9f9',
  // },
  btn: {
    borderRadius: 0,
  },
});

export default App;
