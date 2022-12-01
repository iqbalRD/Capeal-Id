import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ILProfileContributor} from '../../../assets';
import Gap from '../../atom/Gap';

const Profilee = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={ILProfileContributor} style={styles.avatar} />
      </View>
      <Gap height={10} />
      <Text style={{fontSize: 16, fontWeight: '700', textAlign: 'center'}}>
        Fahrul Shelby
      </Text>
      <Text style={{fontSize: 12, fontWeight: '400', textAlign: 'center'}}>
        @muhammadfahruul
      </Text>
      <Gap height={10} />
      <Text>kontribusi | Pengikut | Mengikuti</Text>
      <View
        style={{
          flexDirection: 'row',

          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            paddingHorizontal: 28,
            flexDirection: 'row',
          }}>
          <Text>0 </Text>
        </View>

        <View
          style={{
            paddingHorizontal: 28,
            flexDirection: 'row',
          }}>
          <Text>0 </Text>
        </View>
        <View
          style={{
            paddingHorizontal: 28,
            flexDirection: 'row',
          }}>
          <Text> 0 </Text>
        </View>
      </View>
    </View>
  );
};

export default Profilee;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
});
