import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const UserCard = (props) => {
  return (
    <View style={styles.userCard}>
      <Text style={styles.userCardText}>hhh</Text>
      <Text style={styles.userCardText}>{props.value}</Text>
      {/* <Text style={styles.userCardText}>{props.value}</Text> */}

    </View>
  )
}

export default UserCard

const styles = StyleSheet.create({
  userCard: {
    marginTop: 20,
    width: 120 * 3,
    height: 55,
    backgroundColor: '#0E9EC2',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  userCardText: {
    color: '#ffffff',
    fontSize:16
  }
})