import React, { useState, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Link, useRouter } from "expo-router";
import { useEvent } from "../api/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Main() {
  const [eventId, setEventId] = useState("");
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Введіть ID події</Text>
      <View>
        <TextInput
          value={eventId}
          onChangeText={(text) => setEventId(text)}
          placeholder="Event ID"
          style={styles.input}
        />
      </View>
      <View>
        <Button
          onPress={async () => {
            const res = await useEvent({
              eventId,
            });
            console.log("res", res);
            if (res) {
              await AsyncStorage.setItem("eventId", eventId);
              router.push("/Scan");
            } else {
              Alert.alert("bad data");
              setEventId("");
            }
          }}
          color="#3aac28"
          title="Увійти"
        />
      </View>
      {/* <Link href="/Register" style={styles.signIn}>
        or Register
      </Link> */}
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

// 646ba 9682 ad539 b462 94 b46b
