import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/MaterialIcons"

export default function EventCard({
  onPress,
  isim,
  tarih,
  tur,
  mekan,
  fiyat,
  resimler,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        flex: 1,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#D6DBDF',
        borderRadius: 10,
        marginBottom: 15,
        marginHorizontal: 5,
        backgroundColor: '#FFF6F8',
      }}>
      <Image
        source={{
          uri: `${resimler}`,
        }}
        style={{
          height: 100,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          width: '30%',
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          backgroundColor: '#FF006C',
          position: 'absolute',
          borderRadius: 20,
          paddingHorizontal: 5,
          paddingVertical: 2,
          margin: 5,
        }}>
        <Text style={{color: 'white', fontSize: 10, fontWeight: 800}}>
          {tur}
        </Text>
      </View>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 5,
          justifyContent: 'space-between',
          flex: 1,
        }}>
        <Text style={{fontWeight: '800', color: '#FF006C', fontSize: 15}}>
          {isim}
        </Text>
        <View style={{gap: 1, marginTop: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Icon name="date-range" size={16} style={{color: '#61BAAD'}} />
            <Text style={{color: '#61BAAD', fontWeight: 600}}>{tarih}</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Icon name="location-pin" size={16} style={{color: '#61BAAD'}} />
            <Text style={{color: '#61BAAD', fontWeight: 600}}>
              {mekan.ad} - {mekan.adres}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="attach-money" size={16} style={{color: '#61BAAD'}} />
              <Text style={{color: '#61BAAD', fontWeight: 600}}>
                {fiyat > 0 ? fiyat : 'Ücretsiz'}
              </Text>
            </View>
            <TouchableOpacity
              onPress={onPress}>
              <Icon
                name="keyboard-double-arrow-right"
                size={18}
                style={{color: '#61BAAD'}}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
}
