import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ILLogo} from '../../assets';
import {Gap, Link, IconText, Input, Button, Loading} from '../../components';
import {useForm} from '../../utils';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {autentikasi, db} from '../../config/Firebase';
import {ref, set} from 'firebase/database';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    setLoading(true);
    createUserWithEmailAndPassword(autentikasi, form.email, form.password)
      .then(success => {
        setLoading(false);
        setForm('reset');

        set(ref(db, 'users/' + success.user.uid), {
          fullName: form.fullName,
          email: form.email,
        });

        console.log('succes', success);
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
          </View>

          <Gap height={20} />

          <View style={{paddingHorizontal: 20}}>
            <Gap height={22} />
            <Input
              label="Nama Lengkap"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
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

            <Gap height={42} />
            <Button
              title="Daftar"
              padding={16}
              border={20}
              height={53}
              onPress={onContinue}
            />
          </View>

          <Gap height={29} />

          <Text style={styles.text3}>Atau coba cara lebih mudah</Text>
          <Gap height={31} />

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
            <Text style={styles.text3}>Suda punya akun?</Text>
            <Link
              title="Masuk di sini"
              onPress={() => navigation.navigate('Login')}
            />
          </View>

          <Gap height={50} />
        </View>
      </ScrollView>
      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F5F6FA',
  },
  layout: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 31,
  },
  logo: {
    marginVertical: 22,
  },

  text2: {
    paddingRight: 28,
    alignSelf: 'flex-end',
  },

  text3: {
    alignSelf: 'center',
  },
});
