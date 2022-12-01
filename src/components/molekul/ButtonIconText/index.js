import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../atom/Button';

const ButtonIconText = ({onPress, iconn, title}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon={iconn} onPress={onPress} />
      <Text style={styles.posisi}>{title}</Text>
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
