import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Modal from 'react-native-modal';
import {Button, ButtonIconText, Gap} from '../../atom';
import ProfileContributor from '../ProfileContributor';
import {IconStarNullBig} from '../../../assets';

const ModalUlasan = ({navigation}) => {
  const [modal, setModal] = useState(false);
  return (
    <TouchableOpacity onPress={() => setModal(true)}>
      <ButtonIconText />
      <Modal isVisible={modal}>
        <View
          style={{
            backgroundColor: 'white',
            width: 351,
            height: 481,
            borderRadius: 20,
            paddingHorizontal: 17,
          }}>
          <View style={{alignItems: 'center', paddingTop: 17}}>
            <Text>Asia Heritage</Text>
          </View>
          <Gap height={14} />
          <ProfileContributor />
          <Gap height={12} />
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <IconStarNullBig />
            <IconStarNullBig />
            <IconStarNullBig />
            <IconStarNullBig />
            <IconStarNullBig />
          </View>
          <Gap height={23} />
          <View
            style={{
              width: 316,
              height: 91,
              borderRadius: 6,
              borderWidth: 1,
              paddingLeft: 10,
              borderColor: '#414141',
            }}>
            <TextInput placeholder="Bagikan pengalaman kamu tentang tempat ini" />
          </View>
          <Gap height={18} />
          <TouchableOpacity>
            <ButtonIconText />
          </TouchableOpacity>
          <Gap height={103} />
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Button
              title="Batal"
              padding={10}
              border={5}
              width={81}
              type="secondary"
              borderWidth={1}
              marginRight={12}
              onPress={() => setModal(false)}
            />
            <Button title="Posting" padding={10} border={5} width={81} />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default ModalUlasan;

const styles = StyleSheet.create({});
