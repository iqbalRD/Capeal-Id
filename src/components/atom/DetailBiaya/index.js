import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  IconParkirMobil,
  IconParkirMotor,
  IconTiketMasuk,
} from '../../../assets';

const DetailBiaya = ({category, price}) => {
  const Icon = () => {
    if (category === 'Tiket masuk') {
      return <IconTiketMasuk />;
    }
    if (category === 'Parkir kendaraan mobil') {
      return <IconParkirMobil />;
    }
    if (category === 'Parkir kendaraan motor') {
      return <IconParkirMotor />;
    }

    return <IconTiketMasuk />;
  };
  return (
    <View style={styles.containerDetail}>
      <Icon style={styles.image} />
      <View style={styles.profil}>
        <Text style={styles.name}>{category}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

export default DetailBiaya;

const styles = StyleSheet.create({
  containerDetail: {
    flexDirection: 'row',
    paddingBottom: 16,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 12,

    marginTop: 2,
  },
  profil: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
