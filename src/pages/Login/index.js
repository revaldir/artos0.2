import React from 'react';
import {AsyncStorage, StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  const AuthContext = React.createContext();
  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token
        console.log(data);
        axios
          .post(
            'https://emoneydti.basicteknologi.co.id/index.php/api/users/login',
            {
              email: data.username,
              password: data.password,
            },
          )
          .then(async (response) => {
            if (response.data.status == 'true') {
              try {
                await AsyncStorage.setItem(
                  'userToken',
                  response.data.data.id_user,
                );
                await AsyncStorage.setItem(
                  'email',
                  response.data.data.email_user,
                );
                await AsyncStorage.setItem(
                  'nama',
                  response.data.data.nama_user,
                );
                await AsyncStorage.setItem(
                  'nomorHandphone',
                  response.data.data.nomor_handphone,
                );

                dispatch({type: 'SIGN_IN', token: response.data.data.id_user});
              } catch (e) {
                console.log(e);
              }
            } else {
              ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: async (data) => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <ILLogo />
      </View>
      <Input placeholder="Email" />
      <Gap height={32} />
      <Input placeholder="Password" />
      <Gap height={48} />
      <Button title="LOGIN" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link onPress={() => navigation.navigate('Register')} title="Register" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    marginBottom: 40,
    alignItems: 'center',
  },
});
