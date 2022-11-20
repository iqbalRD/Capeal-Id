import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICGoogle, ILLogo} from '../../assets';
import {Gap, Link} from '../../components';
import {TextInput} from 'react-native-paper';
import {Button} from 'react-native-paper';

const Login = () => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.page}>
      <View style={styles.layout}>
        <ILLogo style={styles.logo} />
      </View>

      <Gap height={50} />

      <View style={styles.input}>
        <TextInput
          style={{
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: '#5E5E5E',
          }}
          placeholder="Username"
          value={text}
          onChangeText={text => setText(text)}
          mode="flat"
        />
      </View>

      <Gap height={14} />

      <View style={styles.input}>
        <TextInput
          style={{
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: '#5E5E5E',
          }}
          placeholder="Email"
          value={text}
          onChangeText={text => setText(text)}
          mode="flat"
        />
      </View>

      <Gap height={14} />

      <View style={styles.input}>
        <TextInput
          style={{
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: '#5E5E5E',
          }}
          placeholder="Konfirmas Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          mode="flat"
        />
      </View>

      <Gap height={14} />

      <View style={styles.input}>
        <TextInput
          style={{
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            borderColor: '#5E5E5E',
          }}
          placeholder="Konfirmas Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          mode="flat"
        />
      </View>

      <Gap height={42} />

      <View style={styles.input}>
        <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          textColor="#FFFFFF"
          buttonColor="#12ADC1">
          Daftar
        </Button>
      </View>

      <Gap height={22} />

      <Text style={styles.text2}>atau coba cara lebih mudah</Text>

      <Gap height={22} />

      <View style={styles.input}>
        <Button
          style={{
            backgroundColor: '#ffffff',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
          icon={ICGoogle}
          mode="contained"
          onPress={() => console.log('Pressed')}
          buttonColor="white"
          textColor="black">
          Continue With Google
        </Button>
      </View>

      <Gap height={22} />

      <Text style={styles.text2}>
        Sudah punya akun?
        <Link title="Daftar di sini" />
      </Text>
    </View>
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
  },
  logo: {
    marginTop: 31,
    marginVertical: 22,
  },
  title: {
    fontFamily: 'IBM Plex Sans-Bold',
    fontSize: 20,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  input: {
    width: 350,
    alignSelf: 'center',
  },

  text2: {
    alignSelf: 'center',
  },
  input1: {
    background: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#5E5E5E',
    borderRadius: 20,
    padding: 18,
    paddingLeft: 26,
  },
});
