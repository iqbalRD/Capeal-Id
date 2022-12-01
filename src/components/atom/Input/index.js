import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

const Input = ({label, value, onChangeText, secureTextEntry}) => {
  const [border, setBorder] = useState('');
  const onFocusForm = () => {
    setBorder('#0066cb');
  };
  const onBlurForm = () => {
    setBorder('#5E5E5E');
  };
  return (
    <View>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        style={styles.input1(border)}
        placeholder={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input1: border => ({
    background: '#FFFFFF',
    borderWidth: 1,
    borderColor: border,
    borderRadius: 20,
    padding: 18,
    paddingLeft: 26,
  }),
});
