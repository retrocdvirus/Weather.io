import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Header, Form, Input, Item, Button, Label, Left, Body, Icon, Title, Text, Toast } from 'native-base'

import * as firebase from 'firebase';



export default class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
      
    })
  }

  componentDidMount() {

    firebase.auth().onAuthStateChanged((user) => {
      if (user != null) {
        console.log('User is logged in')
      }
    })
  }

  signUpUser = (email, password) => {

    try {

      if (this.state.password.length < 6) {
        Toast.show({text: "Please enter at least 6 characters"})
        return;
      }

      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        switch (errorCode) {
          case 'auth/weak-password':
            Toast.show({text: 'Your chosen password is too weak'})
            break;
          case 'auth/operation-not-allowed':
            Toast.show({text: "Something's broken, devs"})
            break;
          case 'auth/invalid-email':
            Toast.show({text: 'The email you entered is invalid'})
            break;
          case 'auth/email-already-in-use':
            Toast.show({text: 'The email you entered is already in use'})
            break;
        }
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {

    try {

      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        console.log(user)
      }).catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        switch (errorCode) {
          case 'auth/user-disabled':
            Toast.show({text: 'That user has been disabled'})
            break;
          case 'auth/user-not-found':
            Toast.show({text: "There is no user with that email"})
            break;
          case 'auth/invalid-email':
            Toast.show({text: 'The email you entered is invalid'})
            break;
          case 'auth/wrong-password':
            Toast.show({text: 'The email or password you entered is incorrect'})
            break;
        }
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  async loginWithFacebook() {
      try{
    //ENTER YOUR APP ID 
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync('395411314600482', { permissions: ['public_profile', 'email'] })
    if (type == 'success') {

      const credential = firebase.auth.FacebookAuthProvider.credential(token)
       // login with credential
       const currentUser = await firebase.auth().signInAndRetrieveDataWithCredential(credential).catch(function(error){
        var errorCode = error.code
        var errorMessage = error.message
        switch (errorCode) {
          case 'auth/account-exists-with-different-credential':
            Toast.show({text: 'An account already exists with that email'})
            break;
          case 'auth/invalid-credential':
            Toast.show({text: "Invalid credentials"})
            break;
          case 'auth/operation-not-allowed':
            Toast.show({text: 'You forgot to enable Facebook login, developers!'})
            break;
          case 'auth/user-disabled':
            Toast.show({text: 'That user has been disabled'})
            break;
          case 'auth/user-not-found':
            Toast.show({text: 'There is no user with that email'})
            break;
          case 'auth/wrong-password':
            Toast.show({text: 'Wrong password'})
            break;
          case 'auth/invalid-verification-code':
            Toast.show({text: 'Invalid verification code'})
            break;
          case 'auth/invalid-verification-id':
            Toast.show({text: 'Invalid verification id'})
            break;
        }
       });
       console.info(JSON.stringify(currentUser.user))
      
      }else{ throw new Error('User cancelled request'); }} 
      catch (e) {
        console.error(e);
      }
     
    }
  
 
  render() {
    return (
        <Form>
          <Text style={{textAlign: 'center',color:'white'}}>Oops! It looks like you aren't logged in. Please sign in below to view your profile</Text>
          <Item floatingLabel>
            <Label style={{color:'white'}}>Email</Label>
            <Input
            style={{color:'white'}}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({ email })}
            />

          </Item>

          <Item floatingLabel>
            <Label style={{color:'white'}}>Password</Label>
            <Input
            style={{color:'white'}}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Login</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text style={{ color: 'white' }}> Sign Up</Text>
          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.loginWithFacebook()}
          >
            <Text style={{ color: 'white' }}> Login With Facebook</Text>
          </Button>
        </Form>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10
  },
});