import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import IconOnly from './IconOnly';

const Button = ({
  type,
  title,
  onPress,
  icon,
  padding,
  border,
  width,
  marginLeft,
  marginRight,
  borderWidth,
}) => {
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  return (
    <TouchableOpacity
      style={styles.container(
        type,
        padding,
        border,
        width,
        marginRight,
        marginLeft,
        borderWidth,
      )}
      onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (
    type,
    padding,
    border,
    width,
    marginRight,
    marginLeft,
    borderWidth,
  ) => ({
    backgroundColor: type === 'secondary' ? '#FFFFFF' : '#12ADC1',
    paddingVertical: padding,
    borderRadius: border,
    width: width,
    marginRight: marginRight,
    marginLeft: marginLeft,
    borderWidth: borderWidth,
    borderColor: type === 'secondary' ? '#12ADC1' : '#FFFFFF',
  }),
  text: type => ({
    fontSize: 18,
    fontWight: '600',
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: type === 'secondary' ? '#12ADC1' : '#FFFFFF',
  }),
});
