import {StyleSheet, View, Text, useWindowDimensions} from 'react-native';
import React from 'react';
import {Button, Profilee, Gap} from '../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'black'}}
    style={{backgroundColor: 'white'}}
    tabStyle={{}}
    renderLabel={({route, focused, color}) => (
      <Text style={{color: 'black', margin: 8}}>{route.title}</Text>
    )}
  />
);

const FirstRoute = () => <View style={{flex: 1}} />;

const SecondRoute = () => <View style={{flex: 1}} />;

const Profile = ({navigation}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Riwayat Aktivitas'},
    {key: 'second', title: 'Foto'},
  ]);
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={styles.page}>
      <View style={{backgroundColor: 'white'}}>
        <View style={{paddingTop: 19, paddingLeft: 344}}>
          <Button
            type="icon-only"
            icon="setting"
            onPress={() => navigation.navigate('Setting')}
          />
        </View>
        <Gap height={26} />
        <Profilee />
        <Gap height={30} />
      </View>
      <View style={styles.tabcontainer}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabcontainer: {
    flex: 1,
  },
});
