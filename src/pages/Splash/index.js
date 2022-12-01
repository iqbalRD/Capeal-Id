import {onAuthStateChanged} from 'firebase/auth';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';
import {autentikasi} from '../../config/Firebase';

const Splash = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = autentikasi.onAuthStateChanged(users => {
      setTimeout(() => {
        if (users) {
          console.log('users: ', users);
          navigation.replace('MainApp');
        } else {
          navigation.replace('Login');
        }
      }, 3000);
    });
    return () => unsubscribe();
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
