/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILSuccess} from '../../assets';
import {Button, Gap, TextBox} from '../../components';
import {colors, fonts} from '../../utils';

const WithdrawSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Image source={ILSuccess} style={styles.img} />
        <Text style={styles.text}>Withdraw Success!</Text>

        <Gap height={24} />
        <TextBox
          txtPrim="60.000"
          txtSec="20 Agustus 2020"
          txtTert="TB0819102782xx"
        />
      </View>
      <Gap height={24} />
      <View style={styles.btnWrapper}>
        <Button title="Home" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default WithdrawSuccess;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 100},
  content: {alignItems: 'center'},
  img: {marginTop: 70},
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 48,
    marginBottom: 10,
  },
  amount: {fontSize: 24, fontFamily: fonts.primary[500]},
  btnWrapper: {paddingHorizontal: 40},
});
