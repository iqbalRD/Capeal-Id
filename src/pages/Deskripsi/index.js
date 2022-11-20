import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  IconLokasi,
  IconMoney,
  IconTelepon,
  IconTime,
  ILAsiaHeritage,
} from '../../assets';
import {
  DetailBiaya,
  DetailFasilitas,
  Gap,
  Header,
  Link,
  ListAkamsi,
  Ulasan,
} from '../../components';

const Deskripsi = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container1}>
        {/*section background*/}
        <View style={styles.wrapper1}>
          <ImageBackground
            source={ILAsiaHeritage}
            style={styles.page}
            resizeMode="cover">
            <Header onPress={() => navigation.goBack()} />
          </ImageBackground>
        </View>
        {/*section informasi singkat asia heritage*/}
        <View style={styles.wrapper2}>
          <Gap height={15} />
          <Text>Asia Heritage</Text>
          <Gap height={22} />
          <View style={styles.wrapper3}>
            <IconLokasi />
            <Text style={styles.image}>
              Jl. Yos Sudarso No.Km12, Muara Fajar, Kec. Rumbai, Kota Pekanbaru,
              Riau
            </Text>
          </View>
          <Gap height={12} />
          <View style={styles.wrapper3}>
            <IconTime />
            <Text style={styles.image}>08.00–18.00 WIB</Text>
          </View>
          <Gap height={16} />
          <View style={styles.wrapper3}>
            <IconTelepon />
            <Text style={styles.image}>0811-7686-682</Text>
          </View>
          <Gap height={19} />
          <View style={styles.wrapper3}>
            <IconMoney />
            <Text style={styles.image}>Mulai dari Rp. 30.000</Text>
          </View>
          <Gap height={20} />
          <View style={styles.line}></View>
          {/*section deskripsi*/}
          <Gap height={14} />
          <Text>Deskripsi</Text>
          <Gap height={6} />
          <Text>
            Bangunan replika dari China, Jepang, dan Korea di desa warisan
            dengan seluncuran anak dan tempat berfoto.
          </Text>
          <Gap height={20} />
          <View style={styles.line}></View>
          <Gap height={14} />
          <Text>Detail Biaya</Text>
          <Gap height={12} />
          <DetailBiaya category="Tiket masuk" price="Rp 30.000 - Rp 50.000" />
          <DetailBiaya category="Parkir kendaraan mobil" price="Rp 5.000" />
          <DetailBiaya category="Parkir Kendaraan Motor" price="Rp 2.000" />
          <Gap height={20} />
          <View style={styles.line}></View>
          {/*section fasilitas wisata*/}
          <Gap height={14} />
          <Text>Fasilitas yang tersedia</Text>
          <View style={styles.wrapper4}>
            <View>
              <DetailFasilitas category="Toilet" />
            </View>

            <View style={styles.wrapper5}>
              <DetailFasilitas category="Musholla" />
            </View>

            <View style={styles.wrapper5}>
              <DetailFasilitas category="Rumah Makan" />
            </View>

            <View style={styles.wrapper5}>
              <DetailFasilitas category="Area Parkir" />
            </View>
          </View>
          <View style={styles.wrapper4}>
            <View>
              <DetailFasilitas category="Cafe" />
            </View>

            <View style={styles.wrapper5}>
              <DetailFasilitas category="Tempat Sampah" />
            </View>

            <View style={styles.wrapper5}>
              <DetailFasilitas category="Spot Foto" />
            </View>
          </View>
          <View style={styles.line}></View>
          {/*section akses ke tempat wisata asia heritage*/}
          <Gap height={14} />
          <Text>Aksesibilitas menuju tempat wisata</Text>
          <Gap height={6} />
          <Text style={{textDecorationStyle: 'dotted'}}>
            Rute mudah ditempuh{' '}
          </Text>
          <Text style={{textDecorationStyle: 'dotted'}}>Jalan beraspal</Text>
          <Text style={{textDecorationStyle: 'dotted'}}>
            Jalan lebar dan padat
          </Text>
          <Text style={{textDecorationStyle: 'dotted'}}>
            Bisa naik mobil dan motor
          </Text>
          <Gap height={20} />
          <View style={styles.line}></View>
          {/*section aktivitas di yang bisa di lakukan di asia heritage*/}
          <Gap height={14} />
          <Text>Aktivitas menarik di Asia Heritage</Text>
          <Gap height={6} />
          <Text style={{textDecorationStyle: 'dotted'}}>
            1. Menyewa Kimono di Little Kyoto
          </Text>
          <Text style={{textDecorationStyle: 'dotted'}}>
            Kawasan Little Kyoto yang dibuat semirip mungkin dengan perkampungan
            Jepang merupakan area favorit pengunjung. Anda bisa menyewa baju
            adat Jepang, kimono, dan menyusuri area ini sambil berfoto-foto.
          </Text>
          <Gap height={16} />
          <Text style={{textDecorationStyle: 'dotted'}}>
            2. Menaiki Banyak Tangga Menuju Replika Great Wall China
          </Text>
          <Text style={{textDecorationStyle: 'dotted'}}>
            Untuk mencapai replikasi Great Wall China, yang berbentuk bangunan
            benteng yang sangat besar. Anda bisa mencapainya dengan menaiki anak
            tangga yang cukup banyak jumlahnya sehingga perlu perjuangan untuk
            mencapainya.
          </Text>
          <Gap height={16} />
          <Text style={{textDecorationStyle: 'dotted'}}>
            3. Memasuki Rumah Tradisional Jeju
          </Text>
          <Text style={{textDecorationStyle: 'dotted'}}>
            Area yang tak kalah favoritnya adalah replica Desa Jeju di Korea.
            Anda bisa melihat-lihat rumah-rumah adat khas Jeju yang berbentuk
            seperti jamur dan juga bisa menyewa baju adat khas Korea yaitu
            Hanbok.
          </Text>
          <Gap height={20} />
          <View style={styles.line}></View>
          {/*sectioan akamsi*/}
          <Gap height={14} />
          <Text>Pemandu wisata terdekat</Text>
          <Gap height={6} />
          <ListAkamsi category="Fahrul D Monkey" umur="22 Tahun" />
          <Gap height={16} />
          <ListAkamsi category="Fahrul Elnino" umur="28 Tahun" />
          <Gap height={16} />
          <ListAkamsi category="Fahrul Signh" umur="32 Tahun" />
          <Gap height={12} />
          <Link
            title="Lainnya..."
            size="right"
            paddingg={8}
            onPress={() => navigation.navigate('Akamsi')}
          />

          <Gap height={20} />
          <View style={styles.line}></View>
          {/*section ulasan*/}
          <Gap height={14} />
          <Text>Ulasan</Text>
          <Gap height={8} />
          <Ulasan />
        </View>
      </View>
    </ScrollView>
  );
};

export default Deskripsi;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
  },
  wrapper1: {
    flex: 1,
  },
  page: {
    height: 254,
  },
  wrapper2: {
    flex: 2,
    padding: 18,
  },
  wrapper3: {
    flexDirection: 'row',
  },

  image: {
    paddingLeft: 18,
    width: 269,
  },
  line: {
    borderBottomWidth: 5,
    borderColor: '#D9D9D9',
  },
  wrapper4: {
    flexDirection: 'row',
    marginLeft: -3,
  },
  wrapper5: {
    marginLeft: 20,
  },
});
