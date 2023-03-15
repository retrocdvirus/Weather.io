import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Container, Icon, Text} from 'native-base'
import * as Animatable from 'react-native-animatable';
import {weatherConditions} from './WeatherConditions';

const Weather = ({ weatherCode, temp_c, temp_f, locationName, isDay, currentDate, currentDay, useFahrenheit}) => {
    return (
        <Animatable.View animation='fadeIn' style={{flex: 1, backgroundColor: weatherConditions[weatherCode].color}}>
          <Animatable.View animation='fadeIn' delay={125} style={styles.topTextContainer}>
              <Text style={styles.dayText}>{currentDay}</Text>
              <Text style={styles.dateText}>{currentDate}</Text>
          </Animatable.View>
          <View style={styles.headerContainer}>
            <Animatable.View animation='fadeIn' delay={250}>
              {isDay = 1 ?
                <Icon style={{fontSize: 300, color: 'white'}} ios={weatherConditions[weatherCode].iosday} android={weatherConditions[weatherCode].mdday}/>
                : <Icon style={{fontSize: 300, color: 'white'}} ios={weatherConditions[weatherCode].iosnight} android={weatherConditions[weatherCode].mdnight}/>
              }
            </Animatable.View>
            {useFahrenheit ? (<Animatable.Text animation='fadeIn' delay={250}><Text style={styles.tempText}>{temp_f}˚F</Text></Animatable.Text>) 
            : (<Animatable.Text animation='fadeIn' delay={250}><Text style={styles.tempText}>{temp_c}˚C</Text></Animatable.Text>)}
          </View>

            <View style={styles.bodyContainer}>
            <Animatable.Text animation='fadeIn' delay= {375}><Text style={styles.locationText}>{locationName}</Text></Animatable.Text>
            <Animatable.View animation='fadeIn' delay={375} style={{marginTop: 5, marginBottom: 5, height: 2, width: '100%', backgroundColor: 'white'}}/>
            <Animatable.View animation='fadeIn' delay={500}>
              {isDay = 1 ? 
                <Text style={styles.title}>{weatherConditions[weatherCode].day}</Text>
                : <Text style={styles.title}>{weatherConditions[weatherCode].night}</Text>
              }
            </Animatable.View>
            <Animatable.Text animation='fadeIn' delay={625}><Text style={styles.subtitle}>{weatherConditions[weatherCode].subtitle}</Text></Animatable.Text>
            </View>
          <View style={{justifyContent:'center', alignItems: 'center', marginBottom: 20}}><Animatable.Text animation="fadeIn" delay={750} iterationCount={"infinite"} direction="alternate"><Text style={styles.hintText}>Swipe left to see more</Text></Animatable.Text></View>
        </Animatable.View>
    );
};

const styles = StyleSheet.create({
  topTextContainer: {
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  dayText: {
    fontSize: 42,
    color: 'white',
    fontFamily: 'RobotoSlab-Bold'
  },
  dateText: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'RobotoSlab-Regular'
  },
  locationTextContainer: {
    paddingLeft: 20
  },
  locationText: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'RobotoSlab-Regular'
},
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  tempText: {
    fontSize: 64,
    color: 'white',
    fontFamily: 'RobotoSlab-Regular'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 20,
    paddingRight:20,
    marginBottom: 10
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontFamily: 'RobotoSlab-Regular'
  },
  subtitle: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'RobotoSlab-Light'
  },
  hintText: {
      fontSize: 14,
      color: 'white'
  }
});

export default Weather;