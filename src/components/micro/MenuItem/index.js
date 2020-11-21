import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconQRPay, IconTopUp, IconTransfer} from '../../../assets';
import {colors, fonts} from '../../../utils';

const MenuItem = ({type, label, onPress}) => {
  const Icon = () => {
    if (type === 'TopUp') {
      return <IconTopUp />;
    }
    if (type === 'QRPay') {
      return <IconQRPay />;
    }
    if (type === 'Transfer') {
      return <IconTransfer />;
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
    fontFamily: fonts.primary[500],
    color: colors.white,
    marginTop: 4,
  },
});
