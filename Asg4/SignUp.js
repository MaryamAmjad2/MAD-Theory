import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useState } from 'react';
import { AsyncStorage } from 'react-native';

const SignUp = ({ navigation }) => {

const[name,setName]=useState()
const[email,setEmail]=useState()
const[pass,setPass]=useState()
const[pro,setpro]=useState()


storeData=async()=>{
  try{
    await AsyncStorage.setItem('usrName',name)
    await AsyncStorage.setItem('usrEmail',email)
    await AsyncStorage.setItem('usrPass',pass)
    setpro('good')
    
  }
  catch{
setpro('Fail')
  }
}


  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.paragraph}> Hi !</Text>
        <Text style={styles.greyText}>Create a new Account</Text>
           <Text>Progress is {pro}</Text>
      </View>
      <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>


        <TextInput style={styles.inp2} 
        placeholder="Name"
        onChangeText={(txt)=>{setName(txt)}}
         />
        <TextInput
          style={styles.inp}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={(txt)=>{setEmail(txt)}}
          >
          
          </TextInput>
        <TextInput style={styles.inp2} secureTextEntry={true}
         placeholder="Password"
         onChangeText={(txt)=>{setPass(txt)}}
          />

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => {
            storeData()
            navigation.navigate('Log In')
          }}>
          <Text style={styles.buttonText}> Create Account</Text>
        </TouchableOpacity>

        <Text style={styles.forgotText}>
          ____________________ <Text style={{ color: '#00008B' }}>OR</Text>{' '}
          ___________________
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.greyText}> Social Media Login</Text>
        <View style={{ flexDirection: 'row', marginTop: 10, padding: 30 }}>
          <AntDesign name="facebook-square" size={32} color="blue" />
          <AntDesign name="apple1" size={32} color="black" />
        </View>
        <Text style={{ fontSize: 12 }}>
          Already have an account ?
          <Text style={{ color: 'blue' }}>Sign In</Text>
        </Text>
     
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    marginLeft: 20,
    marginRight: 20,
  },
  paragraph: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  greyText: {
    marginLeft: 3,
    fontSize: 15,
    color: 'gray',
    marginTop: 5,
  },
  inp: {
    borderWidth: 2,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#00008B',
  },

  inp2: {
    borderWidth: 2,
    borderColor: 'gray',
    width: '100%',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    color: '#00008B',
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
    width: 250,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,
  },
  forgotText: {
    fontSize: 12,
    color: 'grey',
    marginTop: 10,
  },
});
export default SignUp;
