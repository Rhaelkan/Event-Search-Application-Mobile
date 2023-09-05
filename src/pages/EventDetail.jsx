import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

export default function EventDetail({ navigation, route }) {

    const {event} = route.params;

  return (
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text>Geri Dön</Text>
        </TouchableOpacity>
      <Text>{event.id}</Text>
      <Text>{event.isim}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})