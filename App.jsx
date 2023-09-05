import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React from 'react';
import etkinlikler from './data';
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: '#FF006C', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          marginHorizontal: 30,
          marginVertical: 10,
          borderRadius: 15,
          paddingHorizontal: 15,
        }}>
        <TextInput
          style={{flex: 1, fontWeight: '500', fontSize: 16, letterSpacing: 0.4, fontFamily: 'Poppins'}}
          placeholder="Eventify'da Ara" placeholderTextColor="#85929E"></TextInput>
        <View>
          <Icon name="search" size={20} />
        </View>
      </View>
      <FlatList
        contentContainerStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 25,
          paddingBottom: 5,
          paddingHorizontal: 15,
        }}
        numColumns={2}
        data={etkinlikler}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: '#D6DBDF',
              borderRadius: 10,
              marginBottom: 20,
              marginHorizontal: 10,
            }}>
            <Image
              source={{
                uri: `${item.resimler}`,
              }}
              style={{
                width: '100%',
                height: 100,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            />
            <View>
              <Text>{item.isim}</Text>
              <Text>{item.mekan.adres}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
