/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ILWithdraw} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Withdraw = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Withdraw"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Image source={ILWithdraw} style={styles.img} />
      </View>
      <View style={styles.wrapper}>
        <Input placeholder="Nominal Withdraw" />
        <Gap height={16} />
        <Input placeholder="Nomor Rekening" />
        <Gap height={20} />

        <Button
          title="Submit"
          onPress={() => navigation.replace('WithdrawSuccess')}
        />
      </View>
    </View>
  );
};

export default Withdraw;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  container: {alignItems: 'center'},
  img: {marginTop: 40, marginBottom: 40},
  wrapper: {paddingHorizontal: 40},
});
