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
import React, {useState} from 'react';
import etkinlikler, {slaytresimleri,} from './data';
import Icon from 'react-native-vector-icons/MaterialIcons';
import EventCard from './src/components/EventCard';

const App = ({navigation}) => {
  const [searchText, setSearchText] = useState('');
  const filteredEtkinlikler = etkinlikler.filter(
    item =>
      item.isim.toLowerCase().includes(searchText.toLowerCase()) ||
      item.tur.toLowerCase().includes(searchText.toLowerCase()) ||
      item.mekan.adres.toLowerCase().includes(searchText.toLowerCase()),
  );

  return (
    <SafeAreaView style={{backgroundColor: '#FF006C', flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'white',
          marginHorizontal: 20,
          marginTop: 20,
          borderRadius: 15,
          paddingHorizontal: 15,
        }}>
        <TextInput
          style={{
            flex: 1,
            fontWeight: '500',
            fontSize: 16,
            letterSpacing: 0.4,
          }}
          placeholder="Eventify'da Ara"
          placeholderTextColor="#85929E"
          value={searchText}
          onChangeText={text => setSearchText(text)}></TextInput>
        <View>
          <Icon name="search" size={30} />
        </View>
      </View>

      <View style={{margin: 20}}>
        <Text
          style={{
            color: 'white',
            fontWeight: '900',
            fontSize: 28,
            marginBottom: 5,
          }}>
          Popüler Etkinlikler
        </Text>
        <FlatList
          data={slaytresimleri}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <Image
              source={{uri: item}}
              style={{
                width: 250,
                height: 150,
                marginRight: 20,
                borderRadius: 10,
              }}
            />
          )}
        />
      </View>
      <View
        style={{
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: 5,
          paddingHorizontal: 15,
          minHeight: '100%',
        }}>
        <FlatList
        contentContainerStyle={{ marginTop: 10 }}
          showsVerticalScrollIndicator={false}
          data={filteredEtkinlikler}
          ListHeaderComponent={() => (
            <View style={{padding: 5}}>
              <Text style={{color: '#FF006C', fontWeight: '900', fontSize: 28, marginBottom: 10}}>
                Tüm Etkinlikler
              </Text>
            </View>
          )}
          ListEmptyComponent={() => (
            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
                flexDirection: 'column',
                gap: 20,
              }}>
              <Image
                source={{
                  uri: 'https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?w=1380&t=st=1693918082~exp=1693918682~hmac=019eff61adced0ad970228e3b47ba02ddd69bd5fad1fc1b62c086fcad51c48fd',
                }}
                style={{width: '50%', height: 200}}
              />
              <Text
                style={{textAlign: 'center', fontWeight: 600, fontSize: 16}}>
                Üzgünüz, aradığınız{' '}
                <Text
                  style={{textDecorationLine: 'underline', color: '#FF006C'}}>
                  '{searchText}'
                </Text>{' '}
                kelimesine uygun etkinlik bulunamadı. Daha farklı bir arama
                terimi denemek ister misiniz?
              </Text>
            </View>
          )}
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
};

export default App;
