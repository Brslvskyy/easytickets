import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("email: " + email);
  }, [email]);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter in system</Text>
      <View>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          style={styles.input}
          textContentType="password"
        />
      </View>
      <View>
        <Button
          onPress={() => {
            router.push("/MainMenu");
          }}
          color="#3aac28"
          title="Log in"
        />
      </View>
      <Link href="/Register" style={styles.signIn}>
        or Register
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 50,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    textAlign: "center",
  },
  title: {
    fontSize: 36,
    textAlign: "center",
    color: "#000",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#ebebeb",
    marginTop: 30,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  signIn: {
    textAlign: "center",
  },
});
