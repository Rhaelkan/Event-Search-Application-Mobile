import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import etkinlikler from './data';
import Icon from 'react-native-vector-icons/MaterialIcons';

const App = () => {
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
          marginHorizontal: 30,
          marginVertical: 10,
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
      <FlatList
        contentContainerStyle={{
          backgroundColor: 'white',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 25,
          paddingBottom: 5,
          paddingHorizontal: 15,
          minHeight: '100%',
        }}
        numColumns={1}
        data={filteredEtkinlikler}
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
            <Text style={{textAlign: 'center', fontWeight: 600, fontSize: 16}}>
              Üzgünüz, aradığınız{' '}
              <Text style={{textDecorationLine: 'underline', color: '#FF006C'}}>
                '{searchText}'
              </Text>{' '}
              kelimesine uygun etkinlik bulunamadı. Daha farklı bir arama terimi
              denemek ister misiniz?
            </Text>
          </View>
        )}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              borderWidth: 1,
              borderColor: '#D6DBDF',
              borderRadius: 10,
              marginBottom: 15,
              marginHorizontal: 10,
              backgroundColor: '#FFF6F8',
            }}>
            <Image
              source={{
                uri: `${item.resimler}`,
              }}
              style={{
                height: 100,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                width: '30%',
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
                {item.tur}
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 5,
                justifyContent: 'space-between',
              }}>
              <Text style={{fontWeight: '800', color: '#FF006C', fontSize: 15}}>
                {item.isim}
              </Text>
              <View style={{gap: 1}}>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <Icon
                    name="date-range"
                    size={16}
                    style={{color: '#61BAAD'}}
                  />
                  <Text style={{color: '#61BAAD', fontWeight: 600}}>
                    {item.tarih}
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <Icon
                    name="location-pin"
                    size={16}
                    style={{color: '#61BAAD'}}
                  />
                  <Text style={{color: '#61BAAD', fontWeight: 600}}>
                    {item.mekan.ad} - {item.mekan.adres}
                  </Text>
                </View>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                  <Icon
                    name="attach-money"
                    size={16}
                    style={{color: '#61BAAD'}}
                  />
                  <Text style={{color: '#61BAAD', fontWeight: 600}}>
                    {item.biletFiyati.fiyat > 0
                      ? item.biletFiyati.fiyat
                      : 'Ücretsiz'}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default App;
