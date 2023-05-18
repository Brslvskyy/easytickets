import React, {useState} from 'react';

import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const NewEvent = () => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [numberOfSeats, setNumberOfSeats] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Event</Text>
      <View>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Name"
          style={styles.input}
        />
        <TextInput
          value={city}
          onChangeText={text => setCity(text)}
          placeholder="City"
          style={styles.input}
        />
        <TextInput
          value={numberOfSeats}
          onChangeText={text => {
            if (Number.isInteger(+text) && +text <= 10) setNumberOfSeats(text);
          }}
          placeholder="Number of seats"
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            Alert.alert(name, city);
          }}
          color="#3aac28"
          title="Create"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 50,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    textAlign: 'center',
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    color: '#000',
    fontWeight: '500',
  },
  input: {
    backgroundColor: '#ebebeb',
    marginTop: 30,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  signIn: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 50,
  },
});

export default NewEvent;
