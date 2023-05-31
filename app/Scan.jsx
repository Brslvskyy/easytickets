import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useTicket } from "../api/requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StatusType = {
  success: "success",
  failed: "failed",
};

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Готовий сканувати");
  const [status, setStatus] = useState(null);
  const [eventId, setEventId] = useState("");

  const getEventIdFromLS = async () => {
    const event = await AsyncStorage.getItem("eventId");
    setEventId(event);
  };

  useEffect(() => {
    getEventIdFromLS();
  }, []);

  const askForCamerPermission = () => {
    async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status == "granted");
    };
  };

  useEffect(() => {
    askForCamerPermission();
  }, []);

  useEffect(() => {
    const checkCode = async (text) => {
      console.log("SCAN:", text);
      const res = await useTicket({ ticketId: text, eventId });
      console.log("res", res);
      if (res) {
        setStatus(StatusType.success);
      } else {
        setStatus(StatusType.failed);
      }
    };
    if (text !== "Готовий сканувати") {
      checkCode(text);
    }
  }, [text]);

  const handleBarCodeScnned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    console.log("Type:" + type + "\nData:" + data);
  };

  if (hasPermission === null) {
    <View style={styles.container}>
      <Text>Requesting for camera permission</Text>
    </View>;
  }

  if (hasPermission === null) {
    <View style={styles.container}>
      <Text style={{ margin: 10 }}>No access to camera</Text>
      <Button
        title={"Allow Camera"}
        onPress={() => askForCamerPermission()}
        color={"#3aac28"}
      />
    </View>;
  }

  return (
    <View
      style={{
        backgroundColor:
          status === StatusType.success
            ? "#0f0"
            : status === StatusType.failed
            ? "#f00"
            : "#fff",

        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.barcodebox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScnned}
          style={{ height: 400, width: 400 }}
        />
      </View>

      <Text style={styles.maintext}>{text}</Text>
      {scanned && (
        <TouchableOpacity
          style={{
            backgroundColor: "#b6aabb",
            padding: 20,
            borderRadius: 10,
          }}
          onPress={() => {
            setScanned(false);
            setText("Готовий сканувати");
            setStatus(null);
          }}
        >
          <Text>Сканувати</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  barcodebox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "tomato",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
});
