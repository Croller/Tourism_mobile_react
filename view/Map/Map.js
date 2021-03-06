import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Footer,
  FooterTab
} from 'native-base';
// import IconAnt from 'react-native-vector-icons/AntDesign';

class Map extends Component {
  static navigationOptions = {
    drawerLabel: 'Map',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <Header transparent>
          <Left>
            <Button
              transparent
              onPress={() => navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
        </Header>
        <Content padder>
          <Text>Map</Text>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Comfortaa-Regular'
  },
  header: {
    height: 150,
    backgroundColor: '#ffaf02',
  },
  sidebar: {
    fontSize: 20,
    textAlign: 'center',
  },
  list: {
    fontFamily: 'Roboto',
    marginLeft: 0,
    paddingLeft: 15
  }
});

export default Map;
