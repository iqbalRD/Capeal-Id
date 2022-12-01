import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, Header, IconText} from '../../components';
import {ILIg, ILTiktok, ILWeb} from '../../assets';
import {autentikasi} from '../../config/Firebase';
import {showMessage} from 'react-native-flash-message';

const Setting = ({navigation}) => {
  const logOut = () => {
    autentikasi
      .signOut()
      .then(() => {
        console.log('success logout');
        navigation.replace('Login');
      })
      .catch(err => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: 'red',
        });
      });
  };
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onPress={() => navigation.goBack()}
          type="dark"
          title="Pengaturan"
        />

        <View style={{padding: 20}}>
          <Text style={styles.text}>Akun</Text>
          <Gap height={18} />
          <IconText icon="Ubah Profil" />
          <Gap height={12} />
          <IconText icon="Ubah Kata Sandi" />
          <Gap height={26} />
          <View style={styles.line}></View>
          <Gap height={18} />
          <Text style={styles.text}>Bantuan</Text>
          <Gap height={18} />
          <IconText icon="Pusat Bantuan" />
          <Gap height={12} />
          <IconText icon="Tentang Capeal" />
          <Gap height={26} />
          <View style={styles.line}></View>
          <Gap height={18} />
          <Text style={styles.text}>Login</Text>
          <Gap height={18} />
          <IconText icon="Ganti Akun" />
          <Gap height={12} />
          <IconText icon="Logout" onPress={logOut} />
          <Gap height={26} />
          <View style={styles.line}></View>
          <Gap height={18} />
          <Text style={styles.text}>Temukan Kami</Text>
          <Gap height={18} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={ILIg} style={{width: 74, height: 74}} />
            <Image source={ILTiktok} style={{width: 74, height: 74}} />
            <Image source={ILWeb} style={{width: 74, height: 74}} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  text: {fontSize: 16, fontFamily: 'IBM Plex Sans-Bold', color: 'black'},
  line: {
    borderBottomWidth: 5,
    borderColor: '#D9D9D9',
  },
});
