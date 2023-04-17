import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity,Image ,SafeAreaView} from 'react-native';
import Constants from 'expo-constants';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.paragraph}>Chess.com</Text>
      </View>
      <View style={styles.board}>
        <Row1></Row1>
        <Row2></Row2>
        <Row1></Row1>
        <Row2></Row2>
        <Row1></Row1>
        <Row2></Row2>
        <Row1></Row1>
        <Row2></Row2>
      </View>
  <View  style={{flex:1.5}}></View>
     
    </SafeAreaView>
  );
}

// Defining Two custom component 

const Row1 = (icon) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
       
        <Text>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
        <Text>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
        <Text>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
        <Text>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}> Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

const Row2 = () => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
        <Text >Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
        <Text >Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
        <Text>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'white', flex: 1 }}>
        <Text style={{color:'white'}}>Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: 'black', flex: 1 }}>
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },

  appBar:{
     flex: 0.5, backgroundColor: 'black',height:30 ,
    
  },
  board: {
    flex: 3,
    borderWidth: 10,
    borderColor:'#5C4020',
    marginTop:90,
  
    marginHorizontal:30,
    marginBottom: 50,
    
    
  },
});
