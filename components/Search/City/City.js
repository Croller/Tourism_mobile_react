import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  FlatList,
  Keyboard,
  ScrollView
} from 'react-native';
import {
  Container,
  Icon,
  Button,
  Content,
  Text,
  Form,
  Item,
  Input,
  List,
  ListItem,
} from 'native-base';

const test = [
  {
    id: 0,
    text: 'Москва',
  },
  {
    id: 1,
    text: 'Санкт-Петербург',
  },
  {
    id: 2,
    text: 'Будапешт',
  },
  {
    id: 3,
    text: 'Сочи',
  },
  {
    id: 1,
    text: 'Санкт-Петербург',
  },
  {
    id: 2,
    text: 'Будапешт',
  },
  {
    id: 1,
    text: 'Санкт-Петербург',
  },
  {
    id: 2,
    text: 'Будапешт',
  },
  {
    id: 1,
    text: 'Санкт-Петербург',
  },
  {
    id: 2,
    text: 'Будапешт',
  },
  {
    id: 1,
    text: 'Санкт-Петербург',
  },
  {
    id: 2,
    text: 'Будапешт',
  },
  {
    id: 1,
    text: 'Санкт-Петербург',
  },
  {
    id: 2,
    text: 'Будапешт',
  },
];

class City extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  close = () => {
    const { closeSearch } = this.props;
    closeSearch(false);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Button full small light style={styles.hide} onPress={this.close}>
          <Icon name="ios-arrow-down" />
        </Button>
        <Form style={styles.form}>
          <Item last style={styles.formItem}>
            <Icon name="ios-search" />
            <Input
              autoFocus
              ref={(input) => { this.nameInput = input; }}
              style={styles.input}
              onBlur={Keyboard.dismiss}
            />
            <Button light style={styles.button} onPress={this.close}>
              <Text style={styles.buttonText}>Отмена</Text>
            </Button>
          </Item>
        </Form>
        <Content>
          <ScrollView>
            <List>
              <FlatList
                data={test}
                keyExtractor={(item, index) => `city_${index.toString()}`}
                renderItem={({ item }) => (
                  <ListItem
                    button
                    style={styles.itemList}
                  >
                    <Text style={styles.itemListText}>
                      {item.text}
                    </Text>
                  </ListItem>
                )}
              />
            </List>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f8f8'
  },
  hide: {
    height: 20,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#FFFFFF',
  },
  form: {
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingTop: 0,
    borderBottomWidth: 1,
  },
  formItem: {
    paddingLeft: 0,
    padding: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    marginTop: 10,
  },
  icon: {
    marginTop: 15,
    marginBottom: 15,
    color: '#179cc7',
    fontFamily: 'Comfortaa-Light',
    paddingLeft: 15,
    height: 23
  },
  input: {
    fontFamily: 'Comfortaa-Bold',
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    textAlign: 'left',
    letterSpacing: -1,
    fontSize: 16,
  },
  button: {
    height: 50
  },
  buttonText: {
    fontFamily: 'Comfortaa-Regular',
    fontSize: 14,
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
});

City.propTypes = {
  closeSearch: PropTypes.func,
};

City.defaultProps = {
  closeSearch: PropTypes.func,
};

export default City;
