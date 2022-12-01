import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Login,
  Register,
  Splash,
  Beranda,
  Cari,
  Bagikan,
  Rencanamu,
  Profile,
  Deskripsi,
  Akamsi,
  Setting,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Cari" component={Cari} options={{headerShown: false}} />
      <Tab.Screen
        name="Bagikan"
        component={Bagikan}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Rencanamu"
        component={Rencanamu}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Deskripsi"
        component={Deskripsi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Akamsi"
        component={Akamsi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
