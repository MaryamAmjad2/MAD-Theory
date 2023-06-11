import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';

const Home=({navigation})=> {
  return (
    <View style={styles.container}>
       <View style={{ flex: 1.5, paddingLeft: 30, paddingTop: 20 }}>
        <Image source={require('HelloPage.jpeg')} style={styles.img} />
      </View>
      <View style={{ flex: 2, marginTop: 50 }}>
        <Text style={styles.paragraph}>Hello !</Text>
        <Text style={styles.greyText}>
          Best Place to write life stories and share your journey experience
        </Text>
        <TouchableOpacity  style={styles.loginButton}
         onPress={()=>navigation.navigate('Log In')}
                       >
          <Text style={styles.buttonText}> Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}

          onPress={()=>navigation.navigate('Sign UP')}>
          <Text style={styles.signupText}> SignUP</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Home
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor:'red'
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    justifyContent: 'center',
    padding: 20,
    height: 300,
    width: 300,
},
  greyText: {
    marginLeft: 3,
    fontSize: 15,
    color: 'gray',
    textAlign: 'center',
  },
    loginButton: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 30,
    backgroundColor: '#00008B',
    borderRadius: 3,
    paddingVertical: 10,
    marginTop: 20,
  },
  
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
    signUpButton: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 30,
    backgroundColor: 'white',
    borderRadius: 3,
    paddingVertical: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#00008B',
  },
  signupText: {
    fontSize: 15,
    color: '#00008B',

    alignSelf: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },

});
