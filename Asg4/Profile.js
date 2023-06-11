import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({ navigation, route }) => {
  const { Name, Email, Password } = route.params;
  return (
    <View style={styles.container}>
    <View  >
      < Image
        source={require('./person.png')}
        style={{ width: 200, height: 200, borderRadius: 400 / 2 ,marginHorizontal:60,margin:40}}
      />
      </View>
      <TouchableOpacity style={styles.butn2}>
        <Text style={styles.appButtonText}>Name : {JSON.stringify(Name)}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.butn2}>
        <Text style={styles.appButtonText}>
          {' '}
          Your Email : {JSON.stringify(Email)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.butn2}>
        <Text style={styles.appButtonText}>
          Your Password : {JSON.stringify(Password)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
// </TouchableOpacity>

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

  butn2: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    height: 60,
  },
  appButtonText: {
    margin: 0,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
  },
});
