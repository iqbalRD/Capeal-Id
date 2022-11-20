import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Button} from '..';

const ButtonIconText = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="plus" />
      <Text style={styles.posisi}>Tulis Ulasan</Text>
    </View>
  );
};

export default ButtonIconText;

const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    width: 122,
    height: 34,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignSelf: 'center',
    paddingLeft: 8,
    borderWidth: 1,
  },
  posisi: {
    color: '#0779E4',
  },
});
