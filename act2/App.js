import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      time : "",
      clock : new Date()
    };
  }

  componentDidMount = () =>{
    setInterval(() => {
      this.setState(prevState => ({
        clock : new Date(),
        hoy : String(this.state.clock.getMinutes() + " : " + this.state.clock.getSeconds())
      }));
    }, 1000);
  };

  render(){
    const { hoy } = this.state; 
    return(
      <View style={styles.container}>
        <Text>{hoy}</Text>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App
