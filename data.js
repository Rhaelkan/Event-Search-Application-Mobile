const buyuksehirler = [
    'İstanbul',
    'Ankara',
    'İzmir',
    'Bursa',
    'Adana',
    'Antalya',
    'Konya',
    'Mersin',
    'Gaziantep',
    'Diyarbakır',
    'Eskişehir',
    'Düzce',
    'Trabzon',
    'Samsun',
    'Kocaeli',
    'Sakarya',
    'Kayseri',
    'Bolu',
    'Kastamonu',
    'Erzurum',
    'Malatya',
    'Kahramanmaraş',
    'Aydın',
    'Muğla',
  ];

  export const slaytresimleri = [
    'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276',
    'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276',
    'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
  ]

const etkinlikler = [
  {
    id: 1,
    isim: 'Coldplay Konseri',
    aciklama: "Dünyaca ünlü Coldplay'in konseri",
    tarih: '2023-10-15',
    tur: 'Konser',
    mekan: {
      ad: 'Stadium Arena',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/stadium-arena',
    },
    biletFiyati: {
      kategori: 'VIP',
      fiyat: 300,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/coldplay-konseri',
      twitter: 'https://twitter.com/coldplay-konseri',
    },
  },
  {
    id: 2,
    isim: 'Romeo ve Juliet Tiyatro Gösterisi',
    aciklama: 'Klasik Romeo ve Juliet oyununun tiyatro gösterisi',
    tarih: '2023-09-25',
    tur: 'Tiyatro',
    mekan: {
      ad: 'City Theater',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/city-theater',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 50,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/romeo-juliet-gosterisi',
      twitter: 'https://twitter.com/romeo-juliet-gosterisi',
    },
  },
  {
    id: 3,
    isim: 'Osman Hamdi Bey Sergisi',
    aciklama: "Osman Hamdi Bey'in eserlerini sergileyen bir sergi",
    tarih: '2023-11-05',
    tur: 'Sergi',
    mekan: {
      ad: 'Sanat Galerisi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/sanat-galerisi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 20,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/osman-hamdi-sergisi',
      twitter: 'https://twitter.com/osman-hamdi-sergisi',
    },
  },
  {
    id: 4,
    isim: 'Rock Festivali',
    aciklama:
      'Rock müziğin en iyi gruplarının sahne aldığı bir müzik festivali',
    tarih: '2023-08-20',
    tur: 'Müzik Festivali',
    mekan: {
      ad: 'Open Air Park',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/open-air-park',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 75,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/rock-festivali',
      twitter: 'https://twitter.com/rock-festivali',
    },
  },
  {
    id: 5,
    isim: 'Çocuk Tiyatro Gösterisi',
    aciklama: 'Eğlenceli ve eğitici bir çocuk tiyatro gösterisi',
    tarih: '2023-07-10',
    tur: 'Çocuk Tiyatrosu',
    mekan: {
      ad: 'Kids Theater',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/kids-theater',
    },
    biletFiyati: {
      kategori: 'Çocuk',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/cocuk-tiyatro-gosterisi',
      twitter: 'https://twitter.com/cocuk-tiyatro-gosterisi',
    },
  },
  {
    id: 6,
    isim: 'Pazar Pikniği',
    aciklama: 'Aileler için keyifli bir pazar günü pikniği',
    tarih: '2023-06-12',
    tur: 'Aile Etkinliği',
    mekan: {
      ad: 'City Park',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/city-park',
    },
    biletFiyati: {
      kategori: 'Ücretsiz',
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/pazar-piknigi',
      twitter: 'https://twitter.com/pazar-piknigi',
    },
  },
  {
    id: 7,
    isim: 'Bilim ve Teknoloji Sergisi',
    aciklama: 'Geleceğin teknolojilerini keşfetmek için interaktif bir sergi',
    tarih: '2023-09-02',
    tur: 'Sergi',
    mekan: {
      ad: 'Bilim Merkezi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/bilim-merkezi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 30,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/bilim-sergisi',
      twitter: 'https://twitter.com/bilim-sergisi',
    },
  },
  {
    id: 8,
    isim: "Yoga ve Meditasyon Workshop'u",
    aciklama:
      'Zihinsel ve fiziksel sağlığınızı iyileştirmek için yoga ve meditasyon deneyimi',
    tarih: '2023-07-30',
    tur: 'Workshop',
    mekan: {
      ad: 'Zen Center',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/zen-center',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 40,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/yoga-meditasyon-workshop',
      twitter: 'https://twitter.com/yoga-meditasyon-workshop',
    },
  },
  {
    id: 9,
    isim: 'Çocuklar İçin Resim Atölyesi',
    aciklama: 'Çocuklar için yaratıcı bir resim atölyesi deneyimi',
    tarih: '2023-08-08',
    tur: 'Çocuk Etkinliği',
    mekan: {
      ad: 'Sanat Atölyesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/sanat-atolyesi',
    },
    biletFiyati: {
      kategori: 'Çocuk',
      fiyat: 10,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/cocuk-resim-atolyesi',
      twitter: 'https://twitter.com/cocuk-resim-atolyesi',
    },
  },
  {
    id: 10,
    isim: 'Kahve ve Kitap Buluşması',
    aciklama:
      'Kitap severler için keyifli bir kahve eşliğinde sohbet etkinliği',
    tarih: '2023-08-16',
    tur: 'Topluluk Etkinliği',
    mekan: {
      ad: 'Café Kitap',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/cafe-kitap',
    },
    biletFiyati: {
      kategori: 'Ücretsiz',
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/kahve-kitap-bulusmasi',
      twitter: 'https://twitter.com/kahve-kitap-bulusmasi',
    },
  },
  {
    id: 11,
    isim: 'Fotoğraf Sergisi',
    aciklama:
      'Yerel fotoğrafçıların eserlerini sergileyen bir fotoğraf sergisi',
    tarih: '2023-09-10',
    tur: 'Sergi',
    mekan: {
      ad: 'Foto Galeri',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/foto-galeri',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 25,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/fotograf-sergisi',
      twitter: 'https://twitter.com/fotograf-sergisi',
    },
  },
  {
    id: 12,
    isim: 'Dans Gösterisi',
    aciklama: 'Profesyonel dansçıların muhteşem performansı',
    tarih: '2023-07-28',
    tur: 'Dans',
    mekan: {
      ad: 'Dans Stüdyosu',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/dans-studyosu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 40,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/dans-gosterisi',
      twitter: 'https://twitter.com/dans-gosterisi',
    },
  },
  {
    id: 13,
    isim: 'Doğa Yürüyüşü',
    aciklama: 'Doğayı keşfetmek için rehber eşliğinde bir yürüyüş',
    tarih: '2023-08-06',
    tur: 'Doğa',
    mekan: {
      ad: 'Doğa Parkı',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/doga-parki',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/doga-yuruyusu',
      twitter: 'https://twitter.com/doga-yuruyusu',
    },
  },
  {
    id: 14,
    isim: 'Klasik Müzik Konseri',
    aciklama: 'Ünlü klasik müzik eserlerinin seslendirildiği bir konser',
    tarih: '2023-09-18',
    tur: 'Konser',
    mekan: {
      ad: 'Opera Salonu',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/opera-salonu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 25,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/klasik-muzik-konseri',
      twitter: 'https://twitter.com/klasik-muzik-konseri',
    },
  },
  {
    id: 15,
    isim: 'Caz Konseri',
    aciklama: 'Caz müziği tutkunları için özel bir konser',
    tarih: '2023-08-25',
    tur: 'Konser',
    mekan: {
      ad: 'Caz Kulübü',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/caz-kulubu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 35,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/caz-konseri',
      twitter: 'https://twitter.com/caz-konseri',
    },
  },
  {
    id: 16,
    isim: 'Komedi Stand-Up Gösterisi',
    aciklama: 'Komedi dolu bir stand-up gösterisi',
    tarih: '2023-09-05',
    tur: 'Komedi',
    mekan: {
      ad: 'Gülmece Sahnesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/gulmece-sahnesi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 20,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/stand-up-gosterisi',
      twitter: 'https://twitter.com/stand-up-gosterisi',
    },
  },
  {
    id: 17,
    isim: 'Açık Hava Sinema Gösterimi',
    aciklama: 'Keyifli bir açık hava sinema deneyimi',
    tarih: '2023-08-14',
    tur: 'Sinema',
    mekan: {
      ad: 'Açık Hava Sinema Alanı',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/acik-hava-sinema',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 10,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/acik-hava-sinema',
      twitter: 'https://twitter.com/acik-hava-sinema',
    },
  },
  {
    id: 18,
    isim: 'Çocuk Oyunu Gösterisi',
    aciklama: 'Eğlenceli bir çocuk oyunu gösterisi',
    tarih: '2023-07-18',
    tur: 'Çocuk Tiyatrosu',
    mekan: {
      ad: 'Çocuk Sahnesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/cocuk-sahnesi',
    },
    biletFiyati: {
      kategori: 'Çocuk',
      fiyat: 12,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/cocuk-oyunu-gosterisi',
      twitter: 'https://twitter.com/cocuk-oyunu-gosterisi',
    },
  },
  {
    id: 19,
    isim: 'Halk Dansları Gösterisi',
    aciklama: 'Dünya halk danslarından örnekler sunan bir gösteri',
    tarih: '2023-08-29',
    tur: 'Dans',
    mekan: {
      ad: 'Halk Dansları Salonu',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/halk-danslari-salonu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 30,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/halk-danslari-gosterisi',
      twitter: 'https://twitter.com/halk-danslari-gosterisi',
    },
  },
  {
    id: 20,
    isim: 'Vintage Araba Sergisi',
    aciklama: 'Nostaljik vintage arabaların sergilendiği bir etkinlik',
    tarih: '2023-09-20',
    tur: 'Sergi',
    mekan: {
      ad: 'Vintage Garaj',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/vintage-garaj',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/vintage-araba-sergisi',
      twitter: 'https://twitter.com/vintage-araba-sergisi',
    },
  },
  {
    id: 21,
    isim: 'Gurme Yemek Festivali',
    aciklama:
      'Lezzetli yemeklerin ve şarapların tadını çıkarabileceğiniz bir festival',
    tarih: '2023-08-12',
    tur: 'Yemek Festivali',
    mekan: {
      ad: 'Lezzet Parkı',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/gurme-parki',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 45,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/gurme-yemek-festivali',
      twitter: 'https://twitter.com/gurme-yemek-festivali',
    },
  },
  {
    id: 22,
    isim: 'Sanatçı İmza Günü',
    aciklama: 'Ünlü bir sanatçının imza günü etkinliği',
    tarih: '2023-09-08',
    tur: 'Topluluk Etkinliği',
    mekan: {
      ad: 'Sanat Kitabevi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/sanat-kitabevi',
    },
    biletFiyati: {
      kategori: 'Ücretsiz',
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/sanatci-imza-gunu',
      twitter: 'https://twitter.com/sanatci-imza-gunu',
    },
  },
  {
    id: 23,
    isim: 'Bilim Kurgu Film Gösterimi',
    aciklama: 'Bilim kurgu film severler için özel bir gösterim',
    tarih: '2023-08-09',
    tur: 'Sinema',
    mekan: {
      ad: 'Bilim Kurgu Sineması',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/bilim-kurgu-sinemasi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 12,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/bilim-kurgu-film-gosterimi',
      twitter: 'https://twitter.com/bilim-kurgu-film-gosterimi',
    },
  },
  {
    id: 24,
    isim: 'Klasik Araba Rallisi',
    aciklama: 'Klasik arabaların katıldığı bir ralli etkinliği',
    tarih: '2023-09-22',
    tur: 'Spor Etkinliği',
    mekan: {
      ad: 'Ralli Parkuru',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/ralli-parkuru',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 25,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/klasik-araba-rallisi',
      twitter: 'https://twitter.com/klasik-araba-rallisi',
    },
  },
  {
    id: 25,
    isim: 'Gitar Konseri',
    aciklama: 'Yetenekli bir gitar virtüözünün konseri',
    tarih: '2023-08-30',
    tur: 'Konser',
    mekan: {
      ad: 'Müzik Salonu',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/muzik-salonu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 30,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/gitar-konseri',
      twitter: 'https://twitter.com/gitar-konseri',
    },
  },
  {
    id: 26,
    isim: 'Çocuk Atölyesi: Fen Deneyleri',
    aciklama: 'Çocuklar için eğlenceli bir fen deneyleri atölyesi',
    tarih: '2023-09-12',
    tur: 'Çocuk Etkinliği',
    mekan: {
      ad: 'Bilim Çocuk Atölyesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/bilim-cocuk-atolyesi',
    },
    biletFiyati: {
      kategori: 'Çocuk',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/cocuk-fen-deneyleri',
      twitter: 'https://twitter.com/cocuk-fen-deneyleri',
    },
  },
  {
    id: 27,
    isim: 'Fotoğraf Gezisi',
    aciklama: 'Fotoğrafçılığa ilgi duyanlar için şehir turu ve fotoğraf gezisi',
    tarih: '2023-08-18',
    tur: 'Gezi',
    mekan: {
      ad: 'Şehir Merkezi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/sehir-merkezi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 20,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/fotograf-gezisi',
      twitter: 'https://twitter.com/fotograf-gezisi',
    },
  },
  {
    id: 28,
    isim: 'Evcil Hayvan Günü',
    aciklama: 'Evcil hayvanlarınızla eğlenceli bir gün geçirin',
    tarih: '2023-07-22',
    tur: 'Aile Etkinliği',
    mekan: {
      ad: 'Evcil Hayvan Parkı',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/evcil-hayvan-parki',
    },
    biletFiyati: {
      kategori: 'Ücretsiz',
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/evcil-hayvan-gun',
      twitter: 'https://twitter.com/evcil-hayvan-gun',
    },
  },
  {
    id: 29,
    isim: 'Bilim ve Astronomi Konferansı',
    aciklama: 'Bilim ve astronomi meraklıları için bir konferans',
    tarih: '2023-09-14',
    tur: 'Konferans',
    mekan: {
      ad: 'Bilim Merkezi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/bilim-ve-astronomi-konferansi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 25,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/bilim-konferansi',
      twitter: 'https://twitter.com/bilim-konferansi',
    },
  },
  {
    id: 30,
    isim: 'Çocuk Tiyatro Gösterisi',
    aciklama: 'Eğlenceli bir çocuk tiyatro gösterisi',
    tarih: '2023-08-05',
    tur: 'Çocuk Tiyatrosu',
    mekan: {
      ad: 'Çocuk Tiyatro Sahnesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/cocuk-tiyatro-sahnesi',
    },
    biletFiyati: {
      kategori: 'Çocuk',
      fiyat: 10,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/cocuk-tiyatro-gosterisi',
      twitter: 'https://twitter.com/cocuk-tiyatro-gosterisi',
    },
  },
  {
    id: 31,
    isim: 'Pazar Pikniği',
    aciklama: 'Aileler için keyifli bir pazar günü pikniği',
    tarih: '2023-06-12',
    tur: 'Aile Etkinliği',
    mekan: {
      ad: 'City Park',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/city-park',
    },
    biletFiyati: {
      kategori: 'Ücretsiz',
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/pazar-piknigi',
      twitter: 'https://twitter.com/pazar-piknigi',
    },
  },
  {
    id: 32,
    isim: 'Bilim ve Teknoloji Sergisi',
    aciklama: 'Geleceğin teknolojilerini keşfetmek için interaktif bir sergi',
    tarih: '2023-09-02',
    tur: 'Sergi',
    mekan: {
      ad: 'Bilim Merkezi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/bilim-merkezi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 30,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/bilim-sergisi',
      twitter: 'https://twitter.com/bilim-sergisi',
    },
  },
  {
    id: 33,
    isim: "Yoga ve Meditasyon Workshop'u",
    aciklama:
      'Zihinsel ve fiziksel sağlığınızı iyileştirmek için yoga ve meditasyon deneyimi',
    tarih: '2023-07-30',
    tur: 'Workshop',
    mekan: {
      ad: 'Zen Center',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/zen-center',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 40,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/yoga-meditasyon-workshop',
      twitter: 'https://twitter.com/yoga-meditasyon-workshop',
    },
  },
  {
    id: 34,
    isim: 'Çocuklar İçin Resim Atölyesi',
    aciklama: 'Çocuklar için yaratıcı bir resim atölyesi deneyimi',
    tarih: '2023-08-08',
    tur: 'Çocuk Etkinliği',
    mekan: {
      ad: 'Sanat Atölyesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/sanat-atolyesi',
    },
    biletFiyati: {
      kategori: 'Çocuk',
      fiyat: 10,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/cocuk-resim-atolyesi',
      twitter: 'https://twitter.com/cocuk-resim-atolyesi',
    },
  },
  {
    id: 35,
    isim: 'Retro Video Oyun Turnuvası',
    aciklama: "80'lerin retro video oyunlarından oluşan bir turnuva",
    tarih: '2023-09-16',
    tur: 'Oyun Turnuvası',
    mekan: {
      ad: 'Oyun Merkezi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/oyun-merkezi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 20,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/retro-oyun-turnuvasi',
      twitter: 'https://twitter.com/retro-oyun-turnuvasi',
    },
  },
  {
    id: 36,
    isim: 'Dans Partisi',
    aciklama: 'Müziğin ritmiyle dans edebileceğiniz bir parti',
    tarih: '2023-08-21',
    tur: 'Parti',
    mekan: {
      ad: 'Dans Kulübü',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/dans-kulubu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 25,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/dans-partisi',
      twitter: 'https://twitter.com/dans-partisi',
    },
  },
  {
    id: 37,
    isim: 'Doğa Resimleri Sergisi',
    aciklama:
      'Doğadan ilham alan sanatçıların eserlerinin sergilendiği bir etkinlik',
    tarih: '2023-09-10',
    tur: 'Sergi',
    mekan: {
      ad: 'Sanat Galerisi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/sanat-galerisi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 10,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/doga-resimleri-sergisi',
      twitter: 'https://twitter.com/doga-resimleri-sergisi',
    },
  },
  {
    id: 38,
    isim: 'Tarihi Yerler Turu',
    aciklama: 'Şehrin tarihi yerlerini keşfetmek için rehberli bir tur',
    tarih: '2023-08-28',
    tur: 'Gezi',
    mekan: {
      ad: 'Tarih Müzesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/tarihi-yerler-turu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/tarihi-yerler-turu',
      twitter: 'https://twitter.com/tarihi-yerler-turu',
    },
  },
  {
    id: 39,
    isim: 'Müzikal Gösteri',
    aciklama: 'Müziğin ve dansın harmanlandığı büyüleyici bir müzikal gösteri',
    tarih: '2023-09-25',
    tur: 'Müzikal',
    mekan: {
      ad: 'Müzikal Tiyatro',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/muzikal-tiyatro',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 30,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/muzikal-gosteri',
      twitter: 'https://twitter.com/muzikal-gosteri',
    },
  },
  {
    id: 40,
    isim: 'Eğlenceli Aile Oyun Günü',
    aciklama: 'Ailece katılabileceğiniz eğlenceli oyunlarla dolu bir gün',
    tarih: '2023-07-30',
    tur: 'Aile Etkinliği',
    mekan: {
      ad: 'Oyun Merkezi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/eglenceli-aile-oyun-gunu',
    },
    biletFiyati: {
      kategori: 'Aile',
      fiyat: 10,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/eglenceli-aile-oyun-gunu',
      twitter: 'https://twitter.com/eglenceli-aile-oyun-gunu',
    },
  },
  {
    id: 41,
    isim: 'Tango Dans Şovu',
    aciklama: 'Duygusal bir tango dans gösterisi',
    tarih: '2023-08-15',
    tur: 'Dans',
    mekan: {
      ad: 'Dans Salonu',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/tango-dans-salonus',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 25,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/tango-dans-sovu',
      twitter: 'https://twitter.com/tango-dans-sovu',
    },
  },
  {
    id: 42,
    isim: 'Çocuklar İçin Bilim Atölyesi',
    aciklama: 'Çocukların bilimi eğlenceli bir şekilde keşfedeceği bir atölye',
    tarih: '2023-09-10',
    tur: 'Çocuk Etkinliği',
    mekan: {
      ad: 'Bilim Atölyesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/bilim-atolyesi',
    },
    biletFiyati: {
      kategori: 'Çocuk',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/cocuk-bilim-atolyesi',
      twitter: 'https://twitter.com/cocuk-bilim-atolyesi',
    },
  },
  {
    id: 43,
    isim: 'Drama Tiyatrosu Gösterisi',
    aciklama: 'Duygusal bir drama tiyatro gösterisi',
    tarih: '2023-08-28',
    tur: 'Tiyatro',
    mekan: {
      ad: 'Drama Sahnesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/drama-sahnesi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 20,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/drama-tiyatro-gosterisi',
      twitter: 'https://twitter.com/drama-tiyatro-gosterisi',
    },
  },
  {
    id: 44,
    isim: 'Açık Hava Yoga Dersi',
    aciklama: 'Doğanın içinde yoga yapabileceğiniz bir ders',
    tarih: '2023-09-17',
    tur: 'Yoga',
    mekan: {
      ad: 'Yoga Parkı',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/yoga-parki',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/yoga-dersi',
      twitter: 'https://twitter.com/yoga-dersi',
    },
  },
  {
    id: 45,
    isim: 'Klasik Müzik Konseri',
    aciklama: 'Ünlü bir orkestranın klasik müzik konseri',
    tarih: '2023-08-22',
    tur: 'Konser',
    mekan: {
      ad: 'Klasik Müzik Salonu',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/klasik-muzik-salonu',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 40,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/klasik-muzik-konseri',
      twitter: 'https://twitter.com/klasik-muzik-konseri',
    },
  },
  {
    id: 46,
    isim: 'Kahve ve Kitap Sohbeti',
    aciklama: 'Kitap severler için keyifli bir kahve sohbeti',
    tarih: '2023-09-03',
    tur: 'Topluluk Etkinliği',
    mekan: {
      ad: 'Kitap Kafe',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/kitap-kafe',
    },
    biletFiyati: {
      kategori: 'Ücretsiz',
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/kitap-sohbeti',
      twitter: 'https://twitter.com/kitap-sohbeti',
    },
  },
  {
    id: 47,
    isim: 'Bisiklet Turu',
    aciklama: 'Şehri bisikletle keşfetmek için keyifli bir tur',
    tarih: '2023-08-11',
    tur: 'Spor Etkinliği',
    mekan: {
      ad: 'Bisiklet Parkuru',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/bisiklet-parkuru',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 10,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/bisiklet-turu',
      twitter: 'https://twitter.com/bisiklet-turu',
    },
  },
  {
    id: 48,
    isim: 'Yemek Yarışması',
    aciklama: 'Lezzetli yemeklerin yarıştığı bir yemek yarışması',
    tarih: '2023-09-19',
    tur: 'Yarışma',
    mekan: {
      ad: 'Yemek Arenası',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/yemek-arenasi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 20,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/yemek-yarismasi',
      twitter: 'https://twitter.com/yemek-yarismasi',
    },
  },
  {
    id: 49,
    isim: 'Dinozor Sergisi',
    aciklama: 'Dinozorların heyecan verici dünyasını keşfetmek için bir sergi',
    tarih: '2023-08-14',
    tur: 'Sergi',
    mekan: {
      ad: 'Doğa Müzesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/dinozor-sergisi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 15,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/dinozor-sergisi',
      twitter: 'https://twitter.com/dinozor-sergisi',
    },
  },
  {
    id: 50,
    isim: 'Komedi Stand-Up Gösterisi',
    aciklama: 'Kahkaha dolu bir komedi stand-up gösterisi',
    tarih: '2023-09-09',
    tur: 'Komedi',
    mekan: {
      ad: 'Komedi Sahnesi',
      adres: `${buyuksehirler[Math.floor(Math.random() * buyuksehirler.length)]}`,
      haritaLink: 'https://harita-linki.com/komedi-stand-up-gosterisi',
    },
    biletFiyati: {
      kategori: 'Genel',
      fiyat: 20,
    },
    resimler: [
      'https://img.freepik.com/free-vector/open-air-concert-illustration_23-2148663401.jpg?w=1380&t=st=1693835711~exp=1693836311~hmac=637f81655c116dd8f611fe117089431e5355099b84e855a1a67ecbeddb4a2276'
    ],
    sosyalMedyaPaylasimi: {
      facebook: 'https://facebook.com/komedi-stand-up',
      twitter: 'https://twitter.com/komedi-stand-up',
    },
  },
];

export default etkinlikler;



