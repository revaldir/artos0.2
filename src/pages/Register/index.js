import React, {useEffect, useState} from 'react';
import {StyleSheet, ToastAndroid, View} from 'react-native';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';
import axios from 'axios';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nama, setNama] = useState('');
  const [nomorHandphone, setNomorHandphone] = useState('');

  const [form, setForm] = useState();

  useEffect(() => {});

  const postRegister = async () => {
    console.log(email + ' ' + password + ' ' + nama + ' ' + nomorHandphone);
    axios
      .post(
        'https://emoneydti.basicteknologi.co.id/index.php/api/users/registrasi',
        {
          email: email,
          password: password,
          nama: nama,
          nomor_handphone: nomorHandphone,
        },
      )
      .then(function (response) {
        if (response.data.status == 'true') {
          navigation.navigate('Login');
        } else {
          ToastAndroid.show(response.data.msg, ToastAndroid.SHORT);
        }
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Register Account" />
      <View style={styles.content}>
        <Input
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Gap height={32} />
        <Input
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Gap height={32} />
        <Input
          placeholder="Nama"
          onChangeText={(text) => setNama(text)}
          value={nama}
        />
        <Gap height={32} />
        <Input
          placeholder="Nomor HP"
          onChangeText={(text) => setNomorHandphone(text)}
          value={nomorHandphone}
        />
        <Gap height={48} />
        <Button title="Continue" onPress={() => postRegister()} />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {padding: 40, paddingTop: 32},
});
