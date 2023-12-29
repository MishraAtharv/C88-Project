import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />

        {/* Title Bar */}
        <View style={styles.titleBar}>
          <Text style={styles.titleText}>Stellar</Text>
          <Text style={styles.titleText}>App</Text>
        </View>

        {/* Route Cards */}
        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Spacecrafts</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Star Map</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.routeCard}>
          <Text style={styles.routeText}>Daily Pictures</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F2732', // Background color for the entire screen
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  titleBar: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  routeCard: {
    flex: 0.12,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    elevation: 5, // Add elevation for a subtle shadow effect (Android)
    shadowColor: 'black', // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 2, // Shadow radius for iOS
  },
  routeText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#D11583',
  },
});
