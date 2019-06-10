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
  DatePicker
} from 'native-base';

class Excours extends Component {
  static navigationOptions = {
    drawerLabel: 'Excours',
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container style={styles.container}>
        <Content>
          <Form style={[styles.form, { marginTop: '20%' }]}>
            <Item last style={styles.formItem}>
              <Icon name="md-globe" style={styles.icon} />
              <Input style={styles.input} value="Бали" />
            </Item>
            <Item last style={styles.formItem}>
              <Icon name="ios-man" style={styles.icon} />
              <Input style={styles.input} value="2 участника" />
            </Item>
          </Form>
          {/* <Form style={[styles.form, { marginTop: 10 }]}> */}
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
          {/* </Form> */}
          <Form style={[styles.form, { marginTop: 10 }]}>
            <Button full transparent style={styles.button}>
              <Text style={styles.buttonText}>Поиск</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#f8f8f8'
  },
  form: {
    borderRadius: 6,
    backgroundColor: '#179cc7',
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
    textAlign: 'center',
    paddingRight: 50
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
  }
});

export default Excours;
