import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  ICGoogle,
  IconArrowWhite,
  IconBackBlue,
  IconBackDark,
  IconBackDark2,
  IconBantuan,
  IconGantiAkun,
  IconGantiSandi,
  IconPlus,
  IconTentang,
  IconUbahProfil,
  IcSetting,
} from '../../../assets';

const IconOnly = ({onPress, icon}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IconBackDark />;
    }
    if (icon === 'back-light') {
      return <IconArrowWhite />;
    }
    if (icon === 'back-dark2') {
      return <IconBackDark2 />;
    }
    if (icon === 'plus') {
      return <IconPlus />;
    }
    if (icon === 'setting') {
      return <IcSetting />;
    }
    if (icon === 'back-blue') {
      return <IconBackBlue />;
    }
    if (icon === 'user') {
      return <IconUbahProfil />;
    }
    if (icon === 'sandi') {
      return <IconGantiSandi />;
    }
    if (icon === 'akun') {
      return <IconGantiAkun />;
    }
    if (icon === 'bantuan') {
      return <IconBantuan />;
    }
    if (icon === 'tentang') {
      return <IconTentang />;
    }
    return <IconBackDark />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
