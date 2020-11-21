import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';

const Login = ({navigation}) => {
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
