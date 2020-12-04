/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <Image source={ILLogo} style={styles.image} />
      </View>
      <Text style={styles.mainText}>Log In</Text>
      <Text style={styles.secText}>
        Please sign in to continue using our app.
      </Text>
      <Gap height={36} />
      <Input placeholder="Email" />
      <Gap height={20} />
      <Input placeholder="Password" secureTextEntry />
      <Gap height={48} />
      <Button title="Login" onPress={() => navigation.replace('MainApp')} />
      <Gap height={16} />
      <Link
        onPress={() => navigation.navigate('Register')}
        title="Don't Have Account? Register"
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 32,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    marginBottom: 24,
    alignItems: 'center',
  },
  image: {height: 130, width: 130},
  mainText: {
    fontFamily: fonts.primary[700],
    fontSize: 30,
    color: colors.primary,
    marginBottom: 20,
  },
  secText: {
    fontFamily: fonts.primary[600],
    fontSize: 14,
    color: colors.text.primary,
  },
});
