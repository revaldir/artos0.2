import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILQRPay} from '../../assets';
import {Button, Gap, Header, TextBox} from '../../components';
import {colors, fonts} from '../../utils';

const QRConfirm = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Confirmation"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Gap height={16} />
      <View style={styles.content}>
        <Image source={ILQRPay} style={styles.img} />
        <Text style={styles.text}>Rp. 60.000</Text>
        <Gap height={16} />
        <TextBox
          txtPrim="DTI Telkom University"
          txtSec="Pembayaran Kepada:"
          txtTert="Jl. Telekomunikasi, Bandung"
        />
        <Gap height={24} />
      </View>
      <View style={styles.btnWrapper}>
        <Button
          title="SUBMIT"
          onPress={() => navigation.replace('QRSuccess')}
        />
      </View>
    </View>
  );
};

export default QRConfirm;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {alignItems: 'center'},
  img: {width: 200, height: 200, marginBottom: 12},
  text: {fontSize: 24, fontFamily: fonts.primary[500]},
  btnWrapper: {paddingHorizontal: 40},
});
