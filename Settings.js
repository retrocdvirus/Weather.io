import React from 'react'
import {Switch, AsyncStorage } from 'react-native'
import {Text, ListItem, Button, Left, Body, Right, Icon, Content, Separator} from 'native-base'

export default class Settings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useFahrenheit: this.props.useFahrenheit,
            allowNotifications: false
        };
      }

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

    render() {
        return (
            <Content>
            <ListItem icon last>
                <Left>
                    <Button style={{ backgroundColor: "#FF9501" }}>
                        <Icon active ios='ios-thermometer' android='md-thermometer' />
                    </Button>
                </Left>
                <Body>
                    <Text>Use Fahrenheit (˚F)</Text>
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
                    <Text>Notifications</Text>
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
                    <Text>Nofitication time</Text>
                </Body>
                <Right>
                    <Text>06:00</Text>
                    <Icon active ios='ios-arrow-down' android='md-arrow-dropdown'></Icon>
                </Right>
            </ListItem>
            </Content>
          );
        }
    }