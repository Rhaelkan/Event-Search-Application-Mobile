import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import EventCard from '../components/EventCard';
import etkinlikler from '../../data';

export default function CategoryPage({navigation, route}) {
  const {event} = route.params;

  const filteredEtkinlikler = etkinlikler.filter(item =>
    item.tur.toLowerCase().includes(event.tur.toLowerCase()),
  );

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Geri Dön</Text>
        <FlatList
          data={filteredEtkinlikler}
          renderItem={({item}) => {
            <EventCard
              isim={event.isim}
              tur={event.tur}
              tarih={event.tarih}
              resimler={event.resimler}
              fiyat={event.biletFiyati.fiyat}
              mekan={event.mekan}
            />;
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
