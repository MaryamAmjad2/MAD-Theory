import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';

import Icon from 'react-native-vector-icons/Ionicons';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Log IN SuccessFull</Text>
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
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
