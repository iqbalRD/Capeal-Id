import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({label}) => {
  return (
    <View>
      <TextInput style={styles.input1} placeholder={label} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input1: {
    background: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#5E5E5E',
    borderRadius: 20,
    padding: 18,
    paddingLeft: 26,
  },
});
