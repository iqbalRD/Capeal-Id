import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import {
  ILAsiaHeritage,
  ILDanauBuatan,
  ILKotaTuaSenapelan,
  ILPemudaCityWalk,
} from '../../../assets';

const ListWisata = ({category, onPress, marginLeft, marginRight}) => {
  const Icon = () => {
    if (category === 'Asia Heritage') {
      return <Image source={ILAsiaHeritage} style={styles.ilustrasi} />;
    }
    if (category === 'Pemuda City Walk') {
      return <Image source={ILPemudaCityWalk} style={styles.ilustrasi} />;
    }
    if (category === 'Taman Okura') {
      return <Image source={ILDanauBuatan} style={styles.ilustrasi} />;
    }
    if (category === 'Kota Tua Senapelan') {
      return <Image source={ILKotaTuaSenapelan} style={styles.ilustrasi} />;
    }
    return <Image source={ILAsiaHeritage} style={styles.ilustrasi} />;
  };
  return (
    <TouchableOpacity
      style={styles.container(marginLeft, marginRight)}
      onPress={onPress}>
      <Icon />
      <Text style={styles.label}>{category}</Text>
    </TouchableOpacity>
  );
};

export default ListWisata;

const styles = StyleSheet.create({
  container: (marginLeft, marginRight) => ({
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderRadius: 12,
    marginRight: marginRight,
    marginLeft: marginLeft,
  }),

  ilustrasi: {
    width: 168,
    height: 184,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  label: {
    fontSize: 12,
    textAlign: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
