import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {ILAkamsi1, ILAkamsi2, ILAkamsi3} from '../../../assets';
import {Button} from '../../atom';

const ListAkamsi = ({category, marginLeft, marginRight, umur}) => {
  const Akamsi = () => {
    if (category === 'Fahrul D Monkey') {
      return <Image source={ILAkamsi1} style={styles.ilustrasi} />;
    }
    if (category === 'Fahrul Elnino') {
      return <Image source={ILAkamsi2} style={styles.ilustrasi} />;
    }
    if (category === 'Fahrul Signh') {
      return <Image source={ILAkamsi3} style={styles.ilustrasi} />;
    }
    return <Image source={ILAkamsi1} style={styles.ilustrasi} />;
  };
  return (
    <View style={styles.container(marginLeft, marginRight)}>
      <View style={styles.wrapper2}>
        <Akamsi />
      </View>
      <View style={styles.profil}>
        <Text style={styles.label}>{category}</Text>
        <Text style={styles.label}>{umur}</Text>
      </View>
      <View style={styles.arrow}>
        <Button type="icon-only" icon="back-dark2" />
      </View>
    </View>
  );
};

export default ListAkamsi;

const styles = StyleSheet.create({
  container: (marginLeft, marginRight) => ({
    flexDirection: 'row',
    width: 352,
    height: 92,
    backgroundColor: 'white',
    borderRadius: 12,
    marginRight: marginRight,
    marginLeft: marginLeft,
    padding: 16,
  }),

  ilustrasi: {
    width: 60,
    height: 60,
    borderRadius: 7,
  },

  label: {
    fontSize: 12,

    justifyContent: 'center',
  },

  profil: {
    flex: 1,
    padding: 16,
  },
  arrow: {
    padding: 20,
  },
});
