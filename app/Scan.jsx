import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { testQuery, useTicket } from "../api/requests";

const StatusType = {
  success: 'success',
  failed: 'failed'
}

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not yet scanned");
  const [status, setStatus] = useState(null);

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
      console.log(
        'SCAN:', text
      )
      const res = await useTicket({ ticketId: text })
      console.log('res' ,res);
      if (res) {
        setStatus(StatusType.success)
      } else {
        setStatus(StatusType.failed)
      }
    }
    const getT =async () => {
      
      console.log('test query');
      const data = await testQuery()
      console.log(data)
    }
    if (text !== 'Not yet scanned') {
      checkCode(text);
    } else {
      getT()
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
    <View  style={{
      backgroundColor: status === StatusType.success ? '#0f0' : status === StatusType.failed ? '#f00' : '#fff',
      
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    }}>
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
            setText('Not yet scanned');
            setStatus(null)
          }}
        >
          <Text>Scan again</Text>
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
