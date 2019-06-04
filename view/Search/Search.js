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
  FooterTab,
  Tab,
  Tabs,
  ScrollableTab
} from 'native-base';
// import IconAnt from 'react-native-vector-icons/AntDesign';

class Search extends Component {
  static navigationOptions = {
    drawerLabel: 'Search',
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
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Авиа">
            <Text>Авиа</Text>
          </Tab>
          <Tab heading="Отели">
            <Text>Отели</Text>
          </Tab>
          <Tab heading="Экскурсии">
            <Text>Экскурсии</Text>
          </Tab>
        </Tabs>
        {/* <Content padder>
          <Text>Search</Text>
        </Content> */}
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

export default Search;
