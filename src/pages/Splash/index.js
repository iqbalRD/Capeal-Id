import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.logopage}>
      <ILLogo />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logopage: {
    backgroundColor: '#B5DAFD',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
