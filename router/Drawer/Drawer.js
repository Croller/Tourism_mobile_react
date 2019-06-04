import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Text,
  List,
  ListItem,
  Footer
} from 'native-base';
import { LogoV } from '../../assets/img';

import * as pack from '../../package.json';

const routes = [
  {
    id: 0,
    route: 'Search',
    name: 'Поиск',
    icon: 'plane'
  },
  {
    id: 1,
    route: 'Map',
    name: 'Карта',
    icon: 'plane'
  },
  {
    id: 2,
    route: 'Blog',
    name: 'Блог',
    icon: 'plane'
  },
  {
    id: 3,
    route: 'Account',
    name: 'Аккаунт',
    icon: 'hotel'
  },
  {
    id: 4,
    route: 'About',
    name: 'О приложении',
    icon: 'hotel'
  }
];

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  render() {
    const { selected } = this.state;
    const { navigation } = this.props;
    console.log(selected);
    console.log(navigation);
    
    return (
      <Container>
        <Header style={styles.header}>
          <Image source={LogoV} style={styles.imgHeader} />
          {/* <Text>Logo</Text> */}
        </Header>
        <Content>
          <List>
            <FlatList
              data={routes}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <ListItem
                  button
                  onPress={() => { navigation.navigate(item.route); this.setState({ selected: item.id }); }}
                  style={styles.itemList}
                  // style={[styles.itemList, { backgroundColor: (navigation.state.index === selected ? '#ffaf02' : '') }]}
                >
                  <Text style={styles.itemListText}>
                    {item.name}
                  </Text>
                  {/* <ChevronRight color="#ffaf02" size={20} /> */}
                </ListItem>
              )}
            />
          </List>
        </Content>
        <Footer style={styles.footer}>
          <Text style={styles.footerText}>
            ver
            {' '}
            {pack.version}
          </Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 200,
    // backgroundColor: '#ffaf02',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#c9c9c9',
  },
  imgHeader: {
    marginTop: 10,
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  sidebar: {
    fontSize: 20,
    textAlign: 'center',
  },
  itemList: {
    marginLeft: 0,
    paddingLeft: 0,
  },
  itemListActive: {
    backgroundColor: '#ffaf02',
  },
  itemListText: {
    width: 220,
    padding: 5,
    marginLeft: 15,
    fontFamily: 'Comfortaa-Regular'
  },
  textIcon: {
    width: 50
  },
  footer: {
    paddingTop: 10,
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Comfortaa-Light'
  }
});

export default Drawer;
