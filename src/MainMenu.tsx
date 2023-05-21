import React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const MainMenu = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('NewEvent')}
        activeOpacity={0.7}
        style={styles.sectionContainer}>
        <Text style={styles.sectionText}>New Event</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Events')}
        activeOpacity={0.7}
        style={styles.sectionContainer}>
        <Text style={styles.sectionText}>Events</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ChangeInfo')}
        activeOpacity={0.7}
        style={styles.sectionContainer}>
        <Text style={styles.sectionText}>Change Information</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingVertical: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    textAlign: 'center',
  },
  sectionContainer: {
    backgroundColor: '#3aac28',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 150,
  },
  sectionText: {
    fontSize: 36,
    color: '#fff',
  },
});

export default MainMenu;
