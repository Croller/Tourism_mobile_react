import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Container,
  Icon,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem,
  Form,
  Item,
  Label,
  Input,
  DatePicker,
  View,
} from 'native-base';
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';
import City from '../Search/City';

class Avia extends Component {
  static navigationOptions = {
    drawerLabel: 'Avia',
  };

  constructor(props) {
    super(props);
    this.state = {
      showSubSearchCity: false,
      showSubSearchDate: false,
    };
  }

  onSwipeDown = () => {
    const { showSubSearchCity, showSubSearchDate } = this.state;
    if (showSubSearchCity || showSubSearchDate) {
      this.setState({ showSubSearchCity: false, showSubSearchDate: false });
    }
  }

  render() {
    const { showSubSearchCity, showSubSearchDate } = this.state;
    const { navigation } = this.props;
    return (
      <Container>
        <Content style={styles.content}>
          <Form style={[styles.form, { marginTop: '20%' }]}>
            <Item last style={styles.formItem}>
              <Button full large light style={styles.buttonInput} onPress={() => this.setState({ showSubSearchCity: true })}>
                <Icon name="md-locate" style={styles.icon} />
                <Text style={styles.buttonInputText}>Москва</Text>
              </Button>
            </Item>
            <Item last style={[styles.formItem, { marginTop: 2, }]}>
              <Button full large light style={styles.buttonInput} onPress={() => this.setState({ showSubSearchCity: true })}>
                <Icon name="md-globe" style={styles.icon} />
                <Text style={styles.buttonInputText}>Бали</Text>
              </Button>
            </Item>
          </Form>
          <Form style={[styles.form, { marginTop: 10 }]}>
            {/* <Item last style={styles.formItem}>
              <DatePicker
                style={{ opacity: 0 }}
                defaultDate={new Date(2018, 4, 4)}
                minimumDate={new Date(2018, 1, 1)}
                maximumDate={new Date(2018, 12, 31)}
                locale="ru"
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType="fade"
                androidMode="default"
                // placeHolderText="Select date"
                textStyle={{ color: 'green' }}
                placeHolderTextStyle={{ color: '#d3d3d3' }}
                onDateChange={this.setDate}
                disabled={false}
              />
            </Item> */}
            <Item last style={styles.formItem}>
              <Button full large light style={styles.buttonInput} onPress={() => this.setState({ showSubSearchCity: true })}>
                <Icon name="md-browsers" style={styles.icon} />
                <Text style={styles.buttonInputText}>21.08.2019</Text>
              </Button>
            </Item>
            <Item last style={[styles.formItem, { marginTop: 2, }]}>
              <Button full large light style={styles.buttonInput} onPress={() => this.setState({ showSubSearchCity: true })}>
                <Icon name="md-browsers" style={styles.icon} />
                <Text style={styles.buttonInputText}>13.09.2019</Text>
              </Button>
            </Item>
            <Item last style={styles.formItem}>
              <Button full large light style={styles.buttonInput} onPress={() => this.setState({ showSubSearchCity: true })}>
                <Icon name="md-man" style={styles.icon} />
                <Text style={styles.buttonInputText}>2 пассажира</Text>
              </Button>
            </Item>
          </Form>
          <Form style={[styles.form, { marginTop: 10 }]}>
            <Button full transparent style={styles.button}>
              <Text style={styles.buttonText}>Поиск</Text>
            </Button>
          </Form>
        </Content>
        <GestureRecognizer
          onSwipeDown={() => this.onSwipeDown()}
        >
          {
            showSubSearchCity ? (
              <View style={styles.subMenu}>
                <City state={this.state} closeSearch={this.onSwipeDown} />
              </View>
            ) : null
          }
        </GestureRecognizer>
        <View style={[styles.subMenu, (showSubSearchDate ? { height: '100%' } : { height: '0%' })]}>
          <Text>select date</Text>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f8f8f8'
  },
  form: {
    borderRadius: 6,
    backgroundColor: '#ff9f1c',
    padding: 10,
    paddingTop: 0,
  },
  formItem: {
    paddingLeft: 0,
    padding: 0,
    paddingBottom: 0,
    borderBottomWidth: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    // margin: 10,
    // marginLeft: 10,
    marginTop: 10,
  },
  icon: {
    color: '#179cc7',
  },
  buttonInput: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFFFFF',
    borderRadius: 6,
    justifyContent: 'flex-start'
  },
  buttonInputText: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 0
  },
  button: {
    height: 50
  },
  buttonText: {
    fontFamily: 'Comfortaa-Bold',
    fontWeight: 'bold',
    fontSize: 25,
    color: '#FFFFFF',
    lineHeight: 50,
    letterSpacing: -2
  },

  subMenu: {
    height: '100%',
    backgroundColor: '#FFFFFF'
  },

  off: {
    display: 'none',
  }
});

export default Avia;
