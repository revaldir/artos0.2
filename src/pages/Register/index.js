/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Register"/>
      <View style={styles.content}>
      <Text style={styles.text1}>Please register with email and password to continue using our app</Text>
      <Gap height={30} />
        <Input placeholder="Nama" />
        <Gap height={32} />
        <Input placeholder="Nomor Handphone" secureTextEntry />
        <Gap height={32} />
        <Input placeholder="Email" />
        <Gap height={32} />
        <Input placeholder="Password" />
        <Gap height={48} />
        <Button title="Register" onPress={() => navigation.replace('Login')} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white},
  content: {padding: 40, paddingTop: 32},
  text: {
    fontSize: 25,
    color: colors.text.primary1,
},
text1: {
  fontSize: 17,
  color: colors.text.primary,
},
});
