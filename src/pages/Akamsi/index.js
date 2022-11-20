import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, ListAkamsi} from '../../components';

const Akamsi = ({navigation}) => {
  return (
    <View>
      <Header
        onPress={() => navigation.goBack()}
        type="dark"
        title="Pemandu Wisata Terdekat"
      />
      <View style={styles.container}>
        <Gap height={15} />
        <ListAkamsi category="Fahrul D Monkey" umur="22 Tahun" />
        <Gap height={16} />
        <ListAkamsi category="Fahrul Elnino" umur="28 Tahun" />
        <Gap height={16} />
        <ListAkamsi category="Fahrul Signh" umur="32 Tahun" />
      </View>
    </View>
  );
};

export default Akamsi;

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
});
