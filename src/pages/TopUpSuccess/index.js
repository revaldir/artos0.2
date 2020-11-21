import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILTopUp} from '../../assets';
import {Button, Gap, TextBox} from '../../components';
import {colors, fonts} from '../../utils';

const TopUpSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Image source={ILTopUp} style={styles.image} />
        <Text style={styles.text}>Top Up Success</Text>
        <Text style={styles.amount}>Rp 50.000</Text>
        <TextBox txtPrim="VA BCA" txtSec="20 Agustus 2020" />
      </View>
      <Gap height={24} />
      <View style={styles.btnWrapper}>
        <Button title="CONTINUE" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
};

export default TopUpSuccess;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  container: {alignItems: 'center'},
  image: {width: 160, height: 160, borderRadius: 160 / 2, marginTop: 90},
  text: {
    fontSize: 20,
    fontFamily: fonts.primary.normal,
    color: colors.black,
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 10,
  },
  amount: {
    fontSize: 24,
    fontFamily: fonts.primary[500],
    color: colors.black,
    textAlign: 'center',
    marginBottom: 24,
  },
  btnWrapper: {paddingHorizontal: 40},
});
