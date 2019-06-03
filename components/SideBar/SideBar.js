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
} from 'native-base';
import { LogoV } from '../../assets/img';

const routes = [
  {
    route: 'Avia',
    name: 'Авиабилеты',
    icon: 'plane'
  },
  {
    route: 'Hotels',
    name: 'Отели',
    icon: 'hotel'
  }
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
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
                  onPress={() => navigation.navigate(item.route)}
                  style={styles.itemList}
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
    paddingLeft: 15,
  },
  itemListText: {
    width: 220,
    padding: 15,
    fontFamily: 'Comfortaa-Regular'
  },
  textIcon: {
    width: 50
  }
});

export default SideBar;
