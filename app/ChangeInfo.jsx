import React, {useState} from 'react';
import { useRouter } from "expo-router";
import {Alert, Button, StyleSheet, Text, TextInput, View} from 'react-native';

const ChangeInfo = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const route = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change information</Text>
      <View>
        <TextInput
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder={email}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={text => setPassword(text)}
          placeholder="New Password"
          style={styles.input}
          textContentType="password"
        />
        <TextInput
          value={repeatPassword}
          onChangeText={text => setRepeatPassword(text)}
          placeholder="Repeat Password"
          style={styles.input}
          textContentType="password"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => {
            Alert.alert('Changes saved successfully');
            route.push('/MainMenu');
          }}
          color="#3aac28"
          title="Save"
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

export default ChangeInfo;
