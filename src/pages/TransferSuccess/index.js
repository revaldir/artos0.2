import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILTransfer} from '../../assets';
import {Button, Gap, TextBox} from '../../components';
import {colors, fonts} from '../../utils';

const TransferSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Image source={ILTransfer} style={styles.img} />
        <Text style={styles.text}>Transfer Success!</Text>
        <Text style={styles.amount}>Rp. 60.000</Text>
        <Gap height={24} />
        <TextBox
          txtPrim="Dendi Aditya"
          txtSec="20 Agustus 2020"
          txtTert="0819102782xx"
        />
      </View>
      <Gap height={24} />
      <View style={styles.btnWrapper}>
        <Button title="CONTINUE" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default TransferSuccess;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 100},
  content: {alignItems: 'center'},
  img: {width: 240, height: 172, marginTop: 50},
  text: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    marginTop: 48,
    marginBottom: 10,
  },
  amount: {fontSize: 24, fontFamily: fonts.primary[500]},
  btnWrapper: {paddingHorizontal: 40},
});
