/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Input, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Register = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.mainText}>Register</Text>
      <Text style={styles.secText}>
        Please register with email and password to continue using our app
      </Text>
      <Gap height={48} />
      <Input placeholder="Nama" />
      <Gap height={20} />
      <Input placeholder="Nomor Handphone" />
      <Gap height={20} />
      <Input placeholder="Email" />
      <Gap height={20} />
      <Input placeholder="Password" secureTextEntry />
      <Gap height={48} />
      <Button title="Register" onPress={() => navigation.replace('MainApp')} />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1, padding: 32},
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
    maxWidth: 306,
  },
});
