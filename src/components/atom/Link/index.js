import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Link = ({title, size, onPress, paddingg}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text(size, paddingg)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: (size, paddingg) => ({
    fontSize: 14,
    fontFamily: 'IBM Plex Sans-SemiBold',
    textAlign: size,
    fontWeight: '600',
    textDecorationLine: 'underline',
    color: 'black',
    marginRight: paddingg,
  }),
});
