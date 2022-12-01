import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  IconUbahProfil,
  IconGantiSandi,
  IconGantiAkun,
  IconBantuan,
  IconTentang,
  ICGoogle,
  IcLogout,
} from '../../../assets';

const IconText = ({
  icon,
  border,
  width,
  height,
  type,
  borderWidth,
  borderColor,
  onPress,
  paddingLeft,
}) => {
  const Icon = () => {
    if (icon === 'Ubah Profil') {
      return <IconUbahProfil />;
    }
    if (icon === 'Ubah Kata Sandi') {
      return <IconGantiSandi />;
    }
    if (icon === 'Ganti Akun') {
      return <IconGantiAkun />;
    }
    if (icon === 'Pusat Bantuan') {
      return <IconBantuan />;
    }
    if (icon === 'Tentang Capeal') {
      return <IconTentang />;
    }
    if (icon === 'Continue with Google') {
      return <ICGoogle />;
    }
    if (icon === 'Logout') {
      return <IcLogout onPress={onPress} />;
    }
    return <IconUbahProfil />;
  };
  return (
    <TouchableOpacity
      style={styles.wrapper3(
        border,
        width,
        height,
        type,
        borderWidth,
        borderColor,
        paddingLeft,
      )}
      onPress={onPress}>
      <Icon />
      <Text style={styles.image}>{icon}</Text>
    </TouchableOpacity>
  );
};

export default IconText;

const styles = StyleSheet.create({
  wrapper3: (
    border,
    width,
    height,
    type,
    borderWidth,
    borderColor,
    paddingLeft,
  ) => ({
    flexDirection: 'row',
    borderRadius: border,
    width: width,
    height: height,
    paddingVertical: 14,

    borderColor: type === 'secondary' ? '#12ADC1' : '#FFFFFF',
    borderWidth: borderWidth,
    borderColor: borderColor,
    paddingLeft: paddingLeft,
  }),
  image: {
    paddingLeft: 18,
    width: 269,
  },
});
