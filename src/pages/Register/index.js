import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Register Account" />
      <View style={styles.content}>
        <Input placeholder="Email" />
        <Gap height={32} />
        <Input placeholder="Password" secureTextEntry />
        <Gap height={32} />
        <Input placeholder="Nama" />
        <Gap height={32} />
        <Input placeholder="Nomor HP" />
        <Gap height={48} />
        <Button title="Continue" onPress={() => navigation.replace('Login')} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 32},
});
