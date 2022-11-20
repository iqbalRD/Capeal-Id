import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ILProfileContributor} from '../../../assets';

const ProfileContributor = () => {
  return (
    <View style={styles.container}>
      <Image source={ILProfileContributor} style={styles.avatar} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profesi}>Product Designer</Text>
      </View>
    </View>
  );
};

export default ProfileContributor;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
  },
  profesi: {
    fontSize: 12,
    fontWeight: '400',
    color: 'grey',
  },
});
