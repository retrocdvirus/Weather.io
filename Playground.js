import React from 'react';
import { Text, Button, StyleSheet, View } from 'react-native';
import { Constants, Speech } from 'expo';
import Touchable from 'react-native-platform-touchable';
import {weatherConditions} from './WeatherConditions';
const EXAMPLES = [
  { language: 'en', text: 'What the weather like today?' ,ans:''},
  { language: 'en', text: 'Do I need to bring an umbrella today?',ans:'' },
  { language: 'en', text: 'Will it rain today?',ans:'' },
  { language: 'en', text: 'Why are we still here? Just to suffer?' ,ans:''},
];


class AmountControlButton extends React.Component {
  render() {
    return (
      <Touchable
        onPress={this.props.disabled ? null : this.props.onPress}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}>
        <Text
          style={{
            color: this.props.disabled ? '#ccc' : 'yellow',
            fontWeight: 'bold',
            paddingHorizontal: 5,
            fontSize: 18,
          }}>
          {this.props.title}
        </Text>
      </Touchable>
    );
  }
}

export default class PlayGround extends React.Component {
  state = {
    selectedExample: EXAMPLES[0],
    inProgress: false,
    pitch: 1,
    rate: 0.75,
   number:0
  };
  _speak = () => {
    const start = () => {
      this.setState({ inProgress: true });
    };
    const complete = () => {
      this.state.inProgress && this.setState({ inProgress: false });
    };
    
    switch (this.state.selectedExample.text){
    case 'What the weather like today?':
      {this.props.useFahrenheit ? (this.state.selectedExample.ans="Today in "+this.props.location+ " it will be "+weatherConditions[this.props.wcode].day.toString()+" with the temperature of "+this.props.temp_f +" Fahrenheit"):(this.state.selectedExample.ans="Today in "+this.props.location+ " it will be "+ weatherConditions[this.props.wcode].day.toString()+" with the temperature of "+this.props.temp_c+" Celsius")};break;
    case 'Do I need to bring an umbrella today?':{
    switch(weatherConditions[this.props.wcode].color.toString()){
        case '#f7b733':
        this.state.selectedExample.ans="Yes cause it Sunny as hell";break;
        case '#544d7a':
        this.state.selectedExample.ans="Nope cause it is cloudy today";break;
        case '#616161':
        this.state.selectedExample.ans="Nope, but you should stay home cause it is dangerous";break;
        case '#3CD3AD':
        this.state.selectedExample.ans="Nope but there will be "+ weatherConditions[this.props.wcode].subtitle.toString();break;
        case '#005BEA':
        this.state.selectedExample.ans="Yes, It will rain today so bring your umbrella";break;
        case '#00d2ff':
        this.state.selectedExample.ans= weatherConditions[this.props.wcode].subtitle.toString();break;
        case '#076585':
        this.state.selectedExample.ans="Yes, It will rain today so bring your umbrella";break;
      };break;}
    case 'Will it rain today?':
    {switch(weatherConditions[this.props.wcode].color.toString()){
        case '#f7b733':
        this.state.selectedExample.ans="Nope cause it is Sunny as hell";break;
        case '#544d7a':
        this.state.selectedExample.ans="Nope cause it is cloudy today";break;
        case '#616161':
        this.state.selectedExample.ans="Yes and you should stay home cause it is dangerous";break;
        case '#3CD3AD':
        this.state.selectedExample.ans="Nope but there will be "+ weatherConditions[this.props.wcode].subtitle.toString();break;
        case '#005BEA':
        this.state.selectedExample.ans="Yes, It will rain today so bring your umbrella";break;
        case '#00d2ff':
        this.state.selectedExample.ans= weatherConditions[this.props.wcode].subtitle.toString();break;
        case '#076585':
        this.state.selectedExample.ans="Yes, It will rain today so bring your umbrella";break;
    };break;}
    case 'Why are we still here? Just to suffer?':

     this.state.selectedExample.ans="This is just a meme "+this.state.selectedExample.text
  }
    Speech.speak(this.state.selectedExample.ans, {
      language: this.state.selectedExample.language,
      pitch: this.state.pitch,
      rate: this.state.rate,
      onStart: start,
      onDone: complete,
      onStopped: complete,
      onError: complete,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Select a question</Text>
        </View>

        <View style={styles.examplesContainer}>
          {EXAMPLES.map(this._renderExample)}
        </View>

        <View style={styles.separator} />

        <View style={styles.controlRow}>
          <Button
            disabled={this.state.inProgress}
            onPress={this._speak}
            title="Speak"
          />

          <Button
            disabled={!this.state.inProgress}
            onPress={this._stop}
            title="Stop"
          />
        </View>

        <Text style={styles.controlText}>
          Pitch: {this.state.pitch.toFixed(2)}
        </Text>
        <View style={styles.controlRow}>
          <AmountControlButton
            onPress={this._increasePitch}
            title="Increase"
            disabled={this.state.inProgress}
          />

          <Text>/</Text>

          <AmountControlButton
            onPress={this._decreasePitch}
            title="Decrease"
            disabled={this.state.inProgress}
          />
        </View>

        <Text style={styles.controlText}>
          Rate: {this.state.rate.toFixed(2)}
        </Text>
        <View style={styles.controlRow}>
          <AmountControlButton
            onPress={this._increaseRate}
            title="Increase"
            disabled={this.state.inProgress}
          />

          <Text>/</Text>
          <AmountControlButton
            onPress={this._decreaseRate}
            title="Decrease"
            disabled={this.state.inProgress}
          />
        </View>
      </View>
    );
  }

  

  _stop = () => {
    Speech.stop();
  };

  _increasePitch = () => {
    this.setState(state => ({
      ...state,
      pitch: state.pitch + 0.1,
    }));
  };

  _increaseRate = () => {
    this.setState(state => ({
      ...state,
      rate: state.rate + 0.1,
    }));
  };

  _decreasePitch = () => {
    this.setState(state => ({
      ...state,
      pitch: state.pitch - 0.1,
    }));
  };

  _decreaseRate = () => {
    this.setState(state => ({
      ...state,
      rate: state.rate - 0.1,
    }));
  };

  _renderExample = (example, i) => {
    let { selectedExample } = this.state;
    let isSelected = selectedExample === example;

    return (
      <Touchable
        key={i}
        hitSlop={{ top: 10, bottom: 10, left: 20, right: 20 }}
        onPress={() => this._selectExample(example)}>
        <Text
          style={[
            styles.exampleText,
            isSelected && styles.selectedExampleText,
          ]}>
          {example.text} ({example.language})
        </Text>
      </Touchable>
    );
  };

  _selectExample = example => {
    this.setState({ selectedExample: example });
  };
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
    color:'white',
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
    color: 'white',
    marginVertical: 10,
  },
  examplesContainer: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  selectedExampleText: {
    color: 'yellow',
  },
  controlText: {
    fontSize: 16,
    color: 'white',
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
});