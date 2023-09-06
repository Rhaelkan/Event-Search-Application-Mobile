import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {etkinlikdetayresimleri} from '../../data';

export default function EventDetail({navigation, route}) {
  const {event} = route.params;

  return (
    <SafeAreaView style={{backgroundColor: '#FF006C', flex: 1}}>
      <ScrollView>
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
        <View style={{margin: 20}}>
          <Text
            style={{
              color: 'white',
              fontWeight: '900',
              fontSize: 28,
              marginBottom: 5,
            }}>
            {event.isim}
          </Text>
          <FlatList
            data={etkinlikdetayresimleri}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <Image
                source={{uri: item}}
                style={{
                  width: 150,
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
            paddingVertical: 15,
            paddingHorizontal: 20,
            minHeight: '100%',
          }}>
          <View>
            <Text
              style={{
                color: '#FF006C',
                fontWeight: '900',
                fontSize: 28,
                marginBottom: 10,
              }}>
              Etkinlik Detayları
            </Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>Açıklama:</Text>
            <Text style={{color: '#61BAAD'}}>{event.aciklama}.</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>Tarih:</Text>
            <Text style={{color: '#61BAAD'}}>{event.tarih}</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>Kategori:</Text>
            <Text style={{color: '#61BAAD'}}>{event.tur}</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>Konum:</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SelectedPlaces', {place: event.mekan.ad})
                }>
                <Text style={{color: '#61BAAD'}}>{event.mekan.ad} -</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('SelectedPlaces', {
                    place: event.mekan.adres,
                  })
                }>
                <Text style={{color: '#61BAAD'}}> {event.mekan.adres}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>
              Konum Linki:
            </Text>
            <TouchableOpacity>
              <Text style={{textDecorationLine: 'underline', color: '#61BAAD'}}>
                {event.mekan.haritaLink}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>
              Bilet Kategorisi:
            </Text>
            <Text style={{color: '#61BAAD'}}>{event.biletFiyati.kategori}</Text>
          </View>
          <View style={{marginBottom: 10}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>
              Bilet Fiyatı:
            </Text>
            <Text style={{color: '#61BAAD'}}>
              {event.biletFiyati.fiyat > 0
                ? `${event.biletFiyati.fiyat} ₺`
                : 'Ücretsiz'}
            </Text>
          </View>
          <View style={{paddingBottom: 80}}>
            <Text style={{fontWeight: '900', color: '#FF006C'}}>
              Bileti Paylaşın:
            </Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
              <TouchableOpacity>
                <Icon
                  name="facebook"
                  size={24}
                  style={{color: '#1877F2', marginTop: 5}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CommunityIcon
                  name="twitter"
                  size={24}
                  style={{color: '#26a7de', marginTop: 5}}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <CommunityIcon
                  name="instagram"
                  size={24}
                  style={{color: '#fa7e1e', marginTop: 5}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
