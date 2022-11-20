import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, ListWisata} from '../../components';

const Beranda = ({navigation}) => {
  return (
    <View style={styles.container1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={25} />
        <Text style={styles.text1}>Mau jelajahi apa hari ini?</Text>
        <Gap height={12} />

        <View style={styles.wrapper}>
          <Button title="Tempat Wisata " padding={10} border={15} width={170} />
          <Button
            title="Rencana Perjalanan"
            padding={10}
            border={15}
            width={170}
            type="secondary"
          />
        </View>

        <Gap height={25} />

        <Text>Kategori</Text>

        <Gap height={8} />

        <View style={styles.wrapper1}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Button
              title="Populer "
              padding={10}
              border={8}
              width={83}
              marginRight={8}
            />
            <Button
              title="Alam"
              padding={10}
              border={8}
              width={66}
              marginLeft={8}
              marginRight={8}
              type="secondary"
            />
            <Button
              title="Kulineran"
              padding={10}
              border={8}
              width={95}
              marginLeft={8}
              marginRight={8}
              type="secondary"
            />
            <Button
              title="Belanja"
              padding={10}
              border={8}
              width={81}
              marginLeft={8}
              marginRight={8}
              type="secondary"
            />
            <Button
              title="Lainnya"
              padding={10}
              border={8}
              width={82}
              marginLeft={8}
              type="secondary"
            />
          </ScrollView>
        </View>

        <Gap height={22} />

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ListWisata
              category="Asia Heritage"
              marginRight={16}
              onPress={() => navigation.navigate('Deskripsi')}
            />
            <ListWisata category="Pemuda City Walk" marginRight={16} />
            <ListWisata category="Taman Okura" marginRight={16} />
            <ListWisata category="Kota Tua Senapelan" />
          </ScrollView>
        </View>

        <Gap height={19} />

        <Text>Destinasi dari preferensi pengguna</Text>

        <Gap height={12} />

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ListWisata category="Asia Heritage" marginRight={16} />
            <ListWisata category="Pemuda City Walk" marginRight={16} />
            <ListWisata category="Taman Okura" marginRight={16} />
            <ListWisata category="Kota Tua Senapelan" />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    paddingHorizontal: 18,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text1: {},
  wrapper1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
