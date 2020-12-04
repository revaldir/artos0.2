import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IconQRPay, IconTopUp, IconWithdraw} from '../../../assets';
import {colors, fonts} from '../../../utils';

const MenuItem = ({type, label, onPress}) => {
  const Icon = () => {
    if (type === 'TopUp') {
      return <IconTopUp />;
    }
    if (type === 'QRPay') {
      return <IconQRPay />;
    }
    if (type === 'Withdraw') {
      return <IconWithdraw />;
    }
    return <IconTopUp />;
  };
  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <Icon />
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  wrapper: {marginTop: 14, marginBottom: 9, alignItems: 'center'},
  text: {
    fontSize: 12,
    fontFamily: fonts.primary[700],
    color: colors.text.primary,
    marginTop: 5,
  },
});
