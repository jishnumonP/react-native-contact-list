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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import React, { useState } from "react";
import UserCard from "./src/UserCard";
export default function App() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [taskArray, setTaskArray] = useState([{name:"abhi",number:"123456789"},{name:'xyz',number:'9771232345'}]);
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


    <Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetdrawings.com%2Fvectors%2Fback-arrow-vector-5.png&f=1&nofb=1&ipt=e865f5af3814d7b1c43050b15e9b6b33c8fe925e557bba384280b5ca4d0a569c&ipo=images'}}   style={{width: 40, height: 40}} />

         <Text style={styles.screenHeaderText}>ADD DETAILS</Text>
    
         <FontAwesome5
              name='trash'
              color={'#41AADE'}
              size={25}
              />
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
       <UserCard taskArray={taskArray}/>
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
 
});
