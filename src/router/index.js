import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  History,
  Home,
  Login,
  Profile,
  QRConfirm,
  QRScan,
  QRSuccess,
  Register,
  Splash,
  TopUp,
  TopUpSuccess,
  Transfer,
  TransferSuccess,
  UploadPhoto,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpSuccess"
        component={TopUpSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRScan"
        component={QRScan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRConfirm"
        component={QRConfirm}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="QRSuccess"
        component={QRSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferSuccess"
        component={TransferSuccess}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
