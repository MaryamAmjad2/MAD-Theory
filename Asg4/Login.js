import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,Image } from 'react-native';
import Constants from 'expo-constants';
import AntDesign from '@expo/vector-icons/AntDesign';
import{useState} from 'react'

import { AsyncStorage } from 'react-native';
const LogIn=()=> {

const[email,setEmail]=useState()
const[pass,setPass]=useState()

getData=async()=>{
  try{
   const em= await AsyncStorage.getItem('usrEmail')
   const pa=await AsyncStorage.getItem('usrPass')


  }
  catch{
    alert('No Data Found')
  }

  if(em==email & pa==pass){
navigation.navigate('Profile')
  }
  else{
    alert('Failed')
  }
}



  return (
    <View style={styles.container}>
      <View style={{ flex: 1}}>
        <Text style={styles.paragraph}> Welcome !</Text>
        <Text style={styles.greyText}>
        Sign in to Continue
        </Text>
       
      </View>
      <View style={{ flex: 3,justifyContent: 'center',
    alignItems: 'center'}}>
     
      <TextInput style={styles.inp} placeholder='Enter Email' 
      keyboardType="email-address"
      onChangeText={(txt)=>{setEmail(txt)}}
      ></TextInput>


      <TextInput style={styles.inp2} secureTextEntry={true}  
      placeholder='Enter Password'
      onChangeText={(txt)=>{setPass(txt)}}
      />


      <TouchableOpacity  style={styles.loginButton}
      onPress={getData()}
      
      >
      <Text style={styles.buttonText}> Login</Text>
      </TouchableOpacity>



      <Text style={styles.forgotText}> Forgot Password</Text>
       <Text style={styles.forgotText}>
       ____________________  <Text style={{color:'#00008B'}}>OR</Text>  ___________________
       </Text>
      

      </View>
      <View style={{ flex: 1.5,justifyContent: 'center',
    alignItems: 'center',marginTop:-80}}>
      <Text style={styles.greyText}> Social Media Login</Text>
      <View style={{flexDirection:'row',marginTop:10,padding:30}}>
       <AntDesign name="facebook-square" size={32} color="blue" />
       <AntDesign name="apple1" size={32} color="black" />
      </View>
      <Text style={{fontSize:12}}>Dont have an account ?<Text style={{color:'blue'}}>Sign Up</Text></Text>
      </View>
      <View style={{flex:0.23}}></View>
    </View>
  );
}

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
    marginTop:10,
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing:2
    
  },
    greyText: {
    marginLeft: 3,
    fontSize: 15,
    color: 'gray',
    marginTop:5,
    
    
  },
  inp:{
borderWidth:2,
borderColor: "gray",
    width: "100%",
    borderRadius: 10,
    padding: 10,
     marginTop:30,
     color:'#00008B',
     marginTop:-15
  },
    
  inp2:{
borderWidth:2,
borderColor: "gray",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    marginTop:30,
    color:'#00008B'
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
    width:250
  },
    buttonText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'center',
    textTransform: 'uppercase',
    letterSpacing: 3,

  },
  forgotText:{
    fontSize:12,
    color:'grey',
    marginTop:10
  }
  }
);

export default LogIn
