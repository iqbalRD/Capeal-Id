import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ICBeranda,
  ICBerandaActive,
  ICBagikan,
  ICBagikanActive,
  ICCari,
  ICCariActive,
  ICRencanamu,
  ICRencanamuActive,
  ICProfileActive,
  ICProfile,
} from '../../../assets';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Beranda') {
      return active ? <ICBerandaActive /> : <ICBeranda />;
    }
    if (title === 'Cari') {
      return active ? <ICCariActive /> : <ICCari />;
    }
    if (title === 'Bagikan') {
      return active ? <ICBagikanActive /> : <ICBagikan />;
    }
    if (title === 'Rencanamu') {
      return active ? <ICRencanamuActive /> : <ICRencanamu />;
    }
    if (title === 'Profile') {
      return active ? <ICProfileActive /> : <ICProfile />;
    }

    return <ICBeranda />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: active => ({
    fontSize: 10,
    color: active ? '#0BCAD4' : '#495A75',
    fontWeight: '600',
    marginTop: 10,
  }),
});
