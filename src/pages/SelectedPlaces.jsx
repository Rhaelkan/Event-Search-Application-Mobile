import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import etkinlikler from '../../data';
import EventCard from '../components/EventCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SelectedPlaces({navigation, route}) {
  const {place} = route.params;

  const filteredMekanlar = etkinlikler.filter(
    item =>
      item.mekan.ad.toLowerCase().includes(place.toLowerCase()) ||
      item.mekan.adres.toLowerCase().includes(place.toLowerCase()),
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FF006C', flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 15,
          paddingHorizontal: 15,
          paddingVertical: 12,
        }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon name="arrow-back-ios" size={24} style={{color: '#61BAAD'}} />
          <Text style={{fontSize: 16, fontWeight: '600', color: '#61BAAD'}}>
            Geri Dön
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text
          style={{
            color: 'white',
            fontWeight: '900',
            fontSize: 28,
            marginHorizontal: 20,
            marginTop: 20,
          }}>
          {`${place} etkinlikleri`}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: 5,
          paddingVertical: 15,
          paddingHorizontal: 20,
          marginTop: 20,
          minHeight: '100%',
        }}>
        <FlatList
          style={{paddingVertical: 10}}
          data={filteredMekanlar}
          renderItem={({item}) => (
            <EventCard
              onPress={() => navigation.navigate('EventDetail', {event: item})}
              isim={item.isim}
              tur={item.tur}
              tarih={item.tarih}
              resimler={item.resimler}
              fiyat={item.biletFiyati.fiyat}
              mekan={item.mekan}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
