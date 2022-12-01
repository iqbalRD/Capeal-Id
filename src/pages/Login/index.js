import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {ILLogo} from '../../assets';
import {Button, Gap, IconText, Input, Link, Loading} from '../../components';
import {useForm} from '../../utils';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {autentikasi, db} from '../../config/Firebase';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {ref, onValue} from 'firebase/database';

const Login = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    signInWithEmailAndPassword(autentikasi, form.email, form.password)
      .then(res => {
        setLoading(false);
        setForm('reset');
        const userId = autentikasi.currentUser.uid;
        return onValue(
          ref(db, '/users/' + userId),
          snapshot => {
            snapshot.val(form.email) && snapshot.val(form.password);

            navigation.replace('MainApp');
          },
          {
            onlyOnce: true,
          },

          console.log('succes', res),
        );
      })
      .catch(error => {
        const errorMessage = error.message;
        setLoading(false);
        showMessage({
          message: errorMessage,
          type: 'info',
          backgroundColor: 'red',
          color: 'white',
        });
        console.log('eror register', error);
      });
  };

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          <View style={styles.layout}>
            <ILLogo style={styles.logo} />
            <Text style={styles.title}>
              Masuk untuk temukan pengalaman terbaikmu bersama Capeal
            </Text>
          </View>

          <View style={{paddingHorizontal: 20}}>
            <Gap height={22} />
            <Input
              label="Email"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={22} />
            <Input
              label="Kata Sandi"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />

            <Gap height={5.71} />

            <View style={styles.text2}>
              <Link title="Lupa kata sandi?" paddingg={-25} />
            </View>
            <Gap height={42} />
            <Button
              title="Masuk"
              padding={16}
              border={20}
              height={53}
              onPress={onContinue}
            />
          </View>

          <Gap height={72} />

          <Text style={styles.text3}>atau coba cara lebih mudah</Text>
          <Gap height={21} />

          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <IconText
              icon="Continue with Google"
              border={20}
              width={281}
              height={48}
              borderWidth={1}
              paddingLeft={50}
            />
          </TouchableOpacity>

          <Gap height={22} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={styles.text3}>Belum punya akun?</Text>
            <Link
              title="Daftar di sini"
              onPress={() => navigation.navigate('Register')}
            />
          </View>

          <Gap height={50} />
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 26,
  },
  logo: {
    marginVertical: 22,
  },
  title: {
    fontFamily: 'IBM Plex Sans-Bold',
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },

  text2: {
    paddingRight: 28,
    alignSelf: 'flex-end',
  },

  text3: {
    alignSelf: 'center',
  },
});
