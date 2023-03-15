import React, { Component } from 'react';
import {Container, Header, Content, List, Left, Body, Right, Button, Icon, Title, Spinner, Footer, FooterTab, Text, ListItem, Separator, ActionSheet, Card, CardItem} from 'native-base';
import {StyleSheet, View, AsyncStorage, Switch, Alert,ImageBackground} from 'react-native';
import Weather from './Weather';
import ForecastItem from './ForecastItem';
import Profile from './Profile';
import PlayGround from './Playground';
import Swiper from 'react-native-swiper';
import { Font } from 'expo'
import {VictoryChart, VictoryTheme, VictoryLine, VictoryLabel, VictoryAxis} from 'victory-native';

import * as firebase from 'firebase';
import Login from './Login';

// Initialize Firebase
const firebaseConfig = {
  // ADD YOUR FIREBASE CREDENTIALS
  apiKey: "AIzaSyAKqKY0c--1YligvQ5JUeN6nKc8T3-YRuw",
  authDomain: "weatherio.firebaseapp.com",
  databaseURL: "https://weatherio.firebaseio.com",
  projectId: "weatherio",
  storageBucket: "weatherio.appspot.com",
  messagingSenderId: "801301940036"
};

firebase.initializeApp(firebaseConfig);

export const API_KEY = 'd25336e0bba24ac3abe100557190201%20' 

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
          isLoading: true ,
          forecastdays: [],
          error: null,
          todayTempC: 0,
          todayTempF: 0,
          todayConditionCode: '',
          locationName: '',
          currentuser:null,
          isDay: 1,
          currentDate: '',
          currentDay: '',
          currentTab: 'Forecast',
          useFahrenheit: false,
          loggedIn: false};
      };
      setFahrenheitPrefs = async(value) => {
        this.setState({useFahrenheit: value})
        try {
            await AsyncStorage.setItem('useFahrenheit', JSON.stringify(value));
        } catch (error) {
          console.log(error.message);
        }
    }

    setNotificationsPrefs = async(value) => {
        this.setState({allowNotifications: value})
        try {
            await AsyncStorage.setItem('allowNotifications', JSON.stringify(value));
        } catch (error) {
          console.log(error.message);
        }
    }

      add(forecastday){
        fetch('https://mywebsite.com/endpoint/', {
          method: 'POST',
          headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            date: forecastday.date,
            text: forecastday.day.condition.text,
          }),
        });
      }

      componentWillMount(){
        AsyncStorage.getItem('useFahrenheit').then((value) => {
          this.setState({
            useFahrenheit: (value === 'true')
          });
        });
      }
  
      componentDidMount() {
        date = new Date();
        switch (date.getDay()) {
          case 0:
            day = "Sunday";
            break;
          case 1:
            day = "Monday";
            break;
          case 2:
             day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";
        }
        Font.loadAsync({
          'RobotoSlab-Bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
          'RobotoSlab-Regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
          'RobotoSlab-Light': require('./assets/fonts/RobotoSlab-Light.ttf')
        });
        this.setState({currentDate: date.getDate() + "/"+ parseInt(date.getMonth()+1) +"/"+ date.getFullYear(), currentDay: day})
        navigator.geolocation.getCurrentPosition(
          position => {
            this.fetchWeather(position.coords.latitude, position.coords.longitude);
          });
        firebase.auth().onAuthStateChanged((user) => {
          if (user != null) {
            this.setState({loggedIn: true, currentuser: user})
          }
          else {
            this.setState({loggedIn: false})
          }
        })

        
      }
  
      fetchWeather(lat = 25, lon = 25) {
        console.log(`https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7`)
        fetch(
          `https://api.apixu.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=7`
        )
          .then(response => response.json())
          .then(responseJson => {
            this.setState(
              {
                isLoading: false,
                forecastdays: responseJson.forecast.forecastday,
                locationName: responseJson.location.name,
                todayTempC: responseJson.current.temp_c,
                todayTempF: responseJson.current.temp_f,
                todayConditionCode: 'c' + responseJson.current.condition.code,
                isDay: responseJson.current.is_day
              },
              function() {}
            );
          })
          .catch(error => {
            console.error(error);
          });
        }

      render() {
        if (this.state.isLoading) {
          return (
            <View style={styles.basicCenteredView}>
              <Spinner color='blue' />
              <Text>Updating weather forecast</Text>
            </View>
          );
        }
    
        return (
        <Swiper loop={false} showsPagination={false}>
            <Weather weatherCode={this.state.todayConditionCode} temp_c={this.state.todayTempC} temp_f={this.state.todayTempF} locationName={this.state.locationName} isDay={this.state.isDay} currentDate={this.state.currentDate} currentDay={this.state.currentDay} useFahrenheit={this.state.useFahrenheit} />
          
          <Container>
          <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={require('./assets/evening.jpg' )}>
            <Header noLeft transparent>
            
              <Body>
                <Title>{this.state.currentTab}</Title>
              </Body>

            </Header>
            {this.state.currentTab == 'Forecast' ? (
              <Content>
                <List>
                <Card>
                  <CardItem>
                  {this.state.useFahrenheit ? (
                  <VictoryChart theme={VictoryTheme.material} domainPadding={{y:[30,30]}}>
                    <VictoryLine
                      style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                      }}
                      data={this.state.forecastdays}
                      interpolation='natural'
                      x={(f) => f.date.slice(5)}
                      y='day.avgtemp_f'
                    />
                    <VictoryAxis dependentAxis label='Temp(˚F)' axisLabelComponent={<VictoryLabel dy={30}/>}/>
                    <VictoryAxis label='Days' fixLabelOverlap axisLabelComponent={<VictoryLabel dy={-30}/>}/>
                  </VictoryChart>) 
                  : (
                  <VictoryChart theme={VictoryTheme.material} domainPadding={{y:[30,30]}}>
                    <VictoryLine
                      style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc"}
                      }}
                      data={this.state.forecastdays}
                      x={(f) => f.date.slice(5)}
                      y='day.avgtemp_c'
                      interpolation='natural'
                    />
                    <VictoryAxis dependentAxis label='Temp(˚C)' axisLabelComponent={<VictoryLabel dy={30}/>}/>
                    <VictoryAxis label='Days' fixLabelOverlap axisLabelComponent={<VictoryLabel dy={-30}/>}/>
                  </VictoryChart>)}
                  </CardItem>
                </Card>
                  {this.state.forecastdays.map((f, i) =>
                    <ForecastItem forecastday={f} useFahrenheit={this.state.useFahrenheit} key={i} />
                  )}
                </List>
              </Content>)
              : this.state.currentTab == 'Profile' ? (<Profile />)
              :this.state.currentTab == 'PlayGround' ? (
                <Content> 
                  <PlayGround location={this.state.locationName} isDay={this.state.isDay} wcode={this.state.todayConditionCode}  temp_c={this.state.todayTempC} temp_f={this.state.todayTempF} useFahrenheit={this.state.useFahrenheit}/>
                  </Content>) 
              : this.state.currentTab =='Settings' ? (
                <Content>
                <ListItem icon last>
                    <Left>
                        <Button style={{ backgroundColor: "#FF9501" }}>
                            <Icon active ios='ios-thermometer' android='md-thermometer' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{color:'white'}}>Use Fahrenheit (˚F)</Text>
                    </Body>
                    <Right>
                        <Switch name='useFahrenheit' value={this.state.useFahrenheit} onValueChange={(value) => this.setFahrenheitPrefs(value)}/>
                    </Right>
                </ListItem>
    
                <Separator bordered />
    
                <ListItem icon>
                    <Left>
                        <Button style={{ backgroundColor: "#FD3C2D" }}>
                            <Icon active ios='ios-notifications' android='md-notifications' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{color:'white'}}>Notifications</Text>
                    </Body>
                    <Right>
                        <Switch name='useFahrenheit' value={this.state.allowNotifications} onValueChange={(value) => this.setNotificationsPrefs(value)}/>
                    </Right>
                </ListItem>
                <ListItem icon last>
                    <Left>
                        <Button style={{ backgroundColor: "#40E0D0" }}>
                            <Icon active ios='ios-time' android='md-time' />
                        </Button>
                    </Left>
                    <Body>
                        <Text style={{color:'white'}}>Nofitication time</Text>
                    </Body>
                    <Right>
                        <Text style={{color:'white'}}>06:00</Text>
                        <Icon active ios='ios-arrow-down' android='md-arrow-dropdown'></Icon>
                    </Right>
                </ListItem>
                </Content>     
                ) 
              : (<Text>How'd you get to this screen?</Text>)}

            <Footer >
              <FooterTab >
                {this.state.currentTab == 'Forecast' ? (
                  <Button vertical active onPress={() => this.setState({currentTab: 'Forecast'})}>
                    <Icon ios='ios-cloudy' android='md-cloudy' />
                    <Text>Forecast</Text>
                  </Button>
                ) : (
                  <Button vertical onPress={() => this.setState({currentTab: 'Forecast'})}>
                    <Icon ios='ios-cloudy' android='md-cloudy' />
                    <Text>Forecast</Text>
                </Button> 
                )}
                {this.state.currentTab == 'Profile' ? (
                  <Button vertical active onPress={() => this.setState({currentTab: 'Profile'})}>
                    <Icon ios='ios-person' android='md-person' />
                    <Text>Profile</Text>
                  </Button>
                ) : (
                  <Button vertical onPress={() => this.setState({currentTab: 'Profile'})}>
                    <Icon ios='ios-person' android='md-person' />
                    <Text>Profile</Text>
                  </Button> 
                )}
                  {this.state.currentTab == 'PlayGround' ? (
                  <Button vertical active onPress={() => this.setState({currentTab: 'Profile'})}>
                    <Icon ios='ios-list' android='md-list' />
                    <Text>PG</Text>
                  </Button>
                ) : (
                  <Button vertical onPress={() => this.setState({currentTab: 'PlayGround'})}>
                    <Icon ios='ios-list' android='md-list' />
                    <Text>PG</Text>
                  </Button> 
                )}
                {this.state.currentTab == 'Settings' ? (
                  <Button vertical active onPress={() => this.setState({currentTab: 'Settings'})}>
                    <Icon ios='ios-settings' android='md-settings' />
                    <Text>Settings</Text>
                  </Button>
                ) : (
                  <Button vertical onPress={() => this.setState({currentTab: 'Settings'})}>
                    <Icon ios='ios-settings' android='md-settings' />
                    <Text>Settings</Text>
                  </Button> 
                )}
          </FooterTab>
        </Footer>
        </ImageBackground>
          </Container>
        </Swiper>
        );
      }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 0,
    marginBottom: 15,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginHorizontal: 20,
    marginBottom: 0,
    marginTop: 20,
  },
  exampleText: {
    fontSize: 15,
    color: '#ccc',
    marginVertical: 10,
  },
  examplesContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  selectedExampleText: {
    color: 'black',
  },
  controlText: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 5,
    textAlign: 'center',
  },
  controlRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  basicCenteredView:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1 
},
});
