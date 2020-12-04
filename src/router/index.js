import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {
  History,
  Home,
  Login,
  Profile,
  QRScan,
  QRSuccess,
  Register,
  Splash,
  TopUp,
  TopUpSuccess,
  Withdraw,
  WithdrawSuccess,
  Vehicle,
  Welcome,
  EditProfile,
  ChooseVehicle,
  TransactionDetail,
  HistoryDetail,
  AddVehicle,
  EditVehicle,
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Vehicle" component={Vehicle} />
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
        name="QRSuccess"
        component={QRSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Withdraw"
        component={Withdraw}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WithdrawSuccess"
        component={WithdrawSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChooseVehicle"
        component={ChooseVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HistoryDetail"
        component={HistoryDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddVehicle"
        component={AddVehicle}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditVehicle"
        component={EditVehicle}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
