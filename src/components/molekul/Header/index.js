import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap} from '../../atom';

const Header = ({onPress, title, type, color}) => {
  return (
    <View style={styles.container}>
      <View style={styles.container(type)}>
        <Button
          type="icon-only"
          icon={type === 'dark' ? 'back-blue' : 'back-light'}
          onPress={onPress}
        />
        <Text style={styles.text(type, color)}>{title}</Text>
        <Gap width={24} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: (type, color) => ({
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
    backgroundColor: type === 'dark' ? '#FFFFFF' : 'Black',
    flexDirection: 'row',
    alignItems: 'center',
  }),
  text: type => ({
    textAlign: 'center',
    flex: 1,
    fontWeight: '600',
    fontSize: 20,
    color: type === 'dark' ? 'black' : '#B5DAFD',
  }),
});
