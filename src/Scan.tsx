import React, {useState, useEffect} from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const Scan = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Results:</Text>
        <ScrollView style={styles.scrollView}>
          <View style={styles.block}>
            <Button
              onPress={() => {
                navigation.navigate('MainMenu');
              }}
              color="gray"
              title="YAKTAK, Chernivtsi, 10"
            />
          </View>
          <View style={styles.block}>
            <Button
              onPress={() => {
                navigation.navigate('MainMenu');
              }}
              color="gray"
              title="YAKTAK, Chernivtsi, 5"
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: '#000',
    fontWeight: '500',
  },
  scrollView: {
    marginTop: 30,
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  block: {
    paddingBottom: 10,
  },
});

export default Scan;
