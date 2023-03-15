import React from 'react';
import { View ,StyleSheet} from 'react-native'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon,Card,CardItem } from 'native-base';
import { weatherConditions } from './WeatherConditions';

export default class ForecastItem extends React.Component {

  render() {
    return (
        <Card>
          <CardItem>
            <Left>
              <Icon ios={weatherConditions['c' + this.props.forecastday.day.condition.code].iosday} android={weatherConditions['c' + this.props.forecastday.day.condition.code].mdday} />
              <Left>
              {this.props.useFahrenheit ?
                (<Text style={styles.titleText}>    {this.props.forecastday.day.avgtemp_f}˚F</Text>) :
                (<Text style={styles.titleText}>    {this.props.forecastday.day.avgtemp_c}˚C</Text>)
              }
            </Left>
            </Left>
            <Body>
            <Text style={styles.titleText}>{this.props.forecastday.day.condition.text}</Text>
            <Text note>{this.props.forecastday.date}</Text>
            </Body>
          </CardItem>
        </Card>

    );
  }

}
const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});