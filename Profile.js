import React, { Component } from 'react';
import { Image ,StyleSheet, View, Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner, Form } from 'native-base';
import * as firebase from 'firebase';
import Login from './Login';


export default class Profile extends Component {
    constructor(props) {
        super(props)
    
        this.state = ({
         isLoading: true ,
         currentuser:null,
         loggedIn: false
        })
      }

      async signOut(){
        try {
          await firebase.auth().signOut();
          console.log('Logout successful')
          this.setState({loggedIn: false})
        } catch (e){
         console.log(e)
        } 
      }
      
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user != null) {
              this.setState({isLoading: false,currentuser: user,loggedIn: true})
               
            }else{
  
            }
          })
    }

    render() {
    
    if(this.state.isLoading&&this.state.loggedIn){
        return (
            <View style={styles.basicCenteredView}>
              <Spinner color='blue' />
              <Text>Updating user info</Text>
            </View>
          );
    }
    
    return (
      <Content style={{flex: 1, justifyContent: 'center', paddingLeft: 20, paddingRight: 20}}>
        {this.state.loggedIn ? (
          <View>
            <Card >
              <CardItem header bordered>
                <Left>
                  <Thumbnail source={{uri: this.state.currentuser.providerData[0].photoURL}} />
                  <Body>
                    <Text>{this.state.currentuser.providerData[0].displayName}</Text>
                    <Text note>uid: {this.state.currentuser.providerData[0].uid}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem bordered>
                <Text>Welcome to your Profile Page</Text>
              </CardItem>
              <CardItem bordered>
                  <Text>Email: {this.state.currentuser.providerData[0].email}</Text>
              </CardItem>
            </Card>
            <Button style={{marginTop: 10}} full rounded danger onPress={() => Alert.alert('Log out',
                  'Are you sure you wish to logout?',
                  [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => this.signOut()},
                  ])}>
                    <Text>Logout</Text>
                  </Button>
            </View>
            ) 
          : (
              <Login />        
          )}
      </Content>
    )
  }
}
const styles = StyleSheet.create({
    basicCenteredView:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
      }
})