import {
  StyleSheet,
  Text,
  View,
  Alert,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [taskArray, setTaskArray] = useState([]);
  const numberRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const nameRegex = /^[a-zA-Z\s.'-]+$/;
  const handleSubmit = () => {
    if (!name || !number) {
      Alert.alert("Fill the details", "Please enter a name and number");
      return;
    } else if (!numberRegex.test(number) || !nameRegex.test(name)) {
      Alert.alert(
        "Enter valid values",
        "Please enter a valid phone number or name"
      );
      return;
    } else {
      setTaskArray([...taskArray, { name: name, number: number }]);
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.screenHeader}>
<Image source={{uri: 'data:image/png;base64,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'}}
       style={{width: 40, height: 40}} />
          <Text style={styles.screenHeaderText}>ADD DETAILS</Text>
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter name"
            value={name}
            onChangeText={(newName) => setName(newName)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Phone Number"
            keyboardType="numeric"
            value={number}
            onChangeText={(newNum) => setNumber(newNum)}
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
        {taskArray.map((item, index) => {
          return (
            <View style={styles.userCard} key={index}>
              <Text style={styles.userCardText}>{index + 1}</Text>
              <Text style={styles.userCardText}>{item.name}</Text>
              <Text style={styles.userCardText}>{item.number}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 10,
  },
  screenHeader: {
    flexDirection: "row",
    height: 50,
    width: "60%",
    justifyContent: "space-between",
  },
  screenHeaderText: {
    color: "#41AADE",
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    height: 55,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
    borderRadius: 15,
    borderColor: "#0E9EC2",
    fontSize: 16,
  },
  button: {
    width: "40%",
    height: 70,
    backgroundColor: "#41AADE",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 120,
    marginTop: 20,
    marginBottom: 30,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "800",
  },
  userCard: {
    width: 120 * 3,
    height: 55,
    backgroundColor: "#0E9EC2",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 8,
  },
  userCardText: {
    color: "#ffffff",
    fontSize: 16,
  },
});
