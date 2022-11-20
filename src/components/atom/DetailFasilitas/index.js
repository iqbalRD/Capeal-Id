import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  IconAreaParkir,
  IconCafe,
  IconMusholla,
  IconRumahMakan,
  IconSpotFoto,
  IconTempatSampah,
  IconToilet,
} from '../../../assets';

const DetailBiaya = ({category}) => {
  const Icon = () => {
    if (category === 'Toilet') {
      return <IconToilet style={styles.icon} />;
    }
    if (category === 'Mushollah') {
      return <IconMusholla style={styles.icon} />;
    }
    if (category === 'Rumah Makan') {
      return <IconRumahMakan style={styles.icon} />;
    }
    if (category === 'Area Parkir') {
      return <IconAreaParkir style={styles.icon} />;
    }
    if (category === 'Cafe') {
      return <IconCafe style={styles.icon} />;
    }
    if (category === 'Tempat Sampah') {
      return <IconTempatSampah style={styles.icon} />;
    }
    if (category === 'Spot Foto') {
      return <IconSpotFoto style={styles.icon} />;
    }

    return <IconToilet style={styles.icon} />;
  };
  return (
    <View style={styles.containerDetail}>
      <Icon style={styles.image} />
      <View style={styles.profil}>
        <Text style={styles.name}>{category}</Text>
      </View>
    </View>
  );
};

export default DetailBiaya;

const styles = StyleSheet.create({
  containerDetail: {
    paddingBottom: 16,
    alignItems: 'center',
    marginLeft: -3,
  },

  name: {
    fontSize: 10,
    width: 45,
    height: 26,
    textAlign: 'center',
  },
  profil: {},
});
