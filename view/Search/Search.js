import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Icon,
  Right,
  Button,
  Body,
  Text,
  Tab,
  Tabs,
  ScrollableTab,
  Footer,
  FooterTab
} from 'native-base';
import Avia from '../../components/Avia';
import Hotels from '../../components/Hotels';
import Excours from '../../components/Excours';

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
          <Body>
            <Text style={styles.title}>TripTrick</Text>
          </Body>
          <Right />
        </Header>
        <Tabs
          tabBarUnderlineStyle={{ backgroundColor: '#FFFFFF' }}
          renderTabBar={() => <ScrollableTab style={{ backgroundColor: '#FFFFFF', height: 35 }} />}
        >
          <Tab heading="Авиа" tabStyle={styles.tab} textStyle={styles.tabText} activeTabStyle={styles.tabActive} activeTextStyle={[styles.tabActive, styles.avia]}>
            <Avia />
          </Tab>
          <Tab heading="Отели" tabStyle={styles.tab} textStyle={styles.tabText} activeTabStyle={styles.tabActive} activeTextStyle={[styles.tabActive, styles.hotel]}>
            <Hotels />
          </Tab>
          <Tab heading="Экскурсии" tabStyle={styles.tab} textStyle={styles.tabText} activeTabStyle={styles.tabActive} activeTextStyle={[styles.tabActive, styles.excours]}>
            <Excours />
          </Tab>
        </Tabs>
        <Footer>
          <FooterTab>
            <Button>
              <Icon name="ios-stats" />
              <Text style={styles.footerText}>Топ</Text>
            </Button>
            <Button>
              <Icon name="ios-star" />
              <Text style={styles.footerText}>Избранное</Text>
            </Button>
            <Button>
              <Icon name="md-reorder" />
              <Text style={styles.footerText}>История</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Comfortaa-Regular'
  },
  avia: {
    color: '#ff9f1c',
  },
  hotel: {
    color: '#55B533',
  },
  excours: {
    color: '#179CC7',
  },
  tab: {
    backgroundColor: '#ffffff',
  },
  tabText: {
    fontFamily: 'Comfortaa-Regular',
  },
  tabActive: {
    fontFamily: 'Comfortaa-Regular',
    backgroundColor: '#ffffff',
    // color: '#ff9f1c',
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
  },
  footerText: {
    fontSize: 10,
    fontFamily: 'Comfortaa-Light'
  }
});

export default Search;
