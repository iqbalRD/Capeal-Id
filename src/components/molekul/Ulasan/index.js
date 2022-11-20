import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {ButtonIconText, Gap} from '../../atom';
import ProfileContributor from '../ProfileContributor';
import {
  IconBagikan,
  IconLike,
  IconStar,
  IconStarNull,
  ILUlasanHeritage1,
  ILUlasanHeritage2,
  ILUlasanHeritage3,
  ILUlasanHeritage4,
} from '../../../assets';
import ModalUlasan from '../ModalUlasan';

const Ulasan = () => {
  return (
    <View>
      <ModalUlasan />
      <Gap height={29} />
      <ProfileContributor />
      <Gap height={8} />
      <View style={styles.rate}>
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStar />
        <IconStarNull />
        <View style={styles.text}>
          <Text>1 minggu lalu</Text>
        </View>
      </View>
      <Gap height={6} />
      <Text>
        Tempat Wisata bersama keluarga yang sangat direkomendasi. Ada paket Rp.
        50.000 untuk paket terusan dan Rp. 30.000 untuk paket normal. Bagi yang
        mau ke tempat ini saran saya bawa payung atau topi karena akan sangat
        terasa panas pada saat siang hari. Namun tersedia sewa payung Rp. 10.000
        di dalam. Kita bisa merasakan sensasi 4 negara di dalamnya yaitu
        Tiongkok, Korea, Japan, dan Indonesia. Kita juga bisa sewa kinomo,
        cheongsam, hanbok di setiap negara yang ada. Tersedia pasar terapung
        untuk spot kita makan bersama keluarga. Ada spot untuk eskrim yg besar
        seharga Rp. 15.000 di setiap negara yang kita kunjungi. Ada banyak spot
        foto yang sangat instagramable so pastikan hp atau kamera kita tercharge
        full.
      </Text>
      <Gap height={11} />
      <View style={styles.wrapper}>
        <Image
          source={ILUlasanHeritage1}
          resizeMode="cover"
          style={styles.image}
        />
        <Image
          source={ILUlasanHeritage2}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.wrapper}>
        <Image
          source={ILUlasanHeritage3}
          resizeMode="cover"
          style={styles.image}
        />
        <Image
          source={ILUlasanHeritage4}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Gap height={20} />
      <View style={styles.wrapper2}>
        <TouchableOpacity style={styles.wrapper2}>
          <IconLike />
          <Text>14</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wrapper2}>
          <IconBagikan />
          <Text>Bagikan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Ulasan;

const styles = StyleSheet.create({
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    marginLeft: 7,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: -25,
  },
  image: {
    width: 210,
    height: 150,
  },
  wrapper2: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
