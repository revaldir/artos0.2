import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILQRPay} from '../../assets';
import {Button, Gap, TextBox} from '../../components';
import {colors, fonts} from '../../utils';

const QRSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Image source={ILQRPay} style={styles.img} />
        <Text style={styles.text}>Payment Success!</Text>
        <Text style={styles.amount}>Rp. 60.000</Text>
        <Gap height={24} />
        <TextBox
          txtPrim="DTI Telkom University"
          txtSec="20 Agustus 2020"
          txtTert="Jl. Telekomunikasi, Bandung"
        />
        <Gap height={24} />
      </View>
      <View style={styles.btnWrapper}>
        <Button title="CONTINUE" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default QRSuccess;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {alignItems: 'center'},
  img: {width: 200, height: 200, marginTop: 56},
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 16,
    marginBottom: 10,
  },
  amount: {fontSize: 24, fontFamily: fonts.primary[500]},
  btnWrapper: {paddingHorizontal: 40},
});
