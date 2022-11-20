import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  IconArrowWhite,
  IconBackDark,
  IconBackDark2,
  IconPlus,
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
