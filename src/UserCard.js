import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCard = ({taskArray}) => {
  return (
    <View>
       {taskArray.map((item, index) => {
          return (
            <View style={styles.userCard} key={index}>
              <Text style={styles.userCardText}>{index + 1}</Text>
              <Text style={styles.userCardText}>{item.name}</Text>
              <Text style={styles.userCardText}>{item.number}</Text>
            </View>
          );
        })}
    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
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
})