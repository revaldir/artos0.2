import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  IconBike,
  IconCar,
  IconNext,
  IconQRHistory,
  IconTopUpHistory,
  IconWithdrawHistory,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Transaction = ({icon, clickable, onPress, amount, desc, date}) => {
  const Icon = () => {
    if (icon === 'car') {
      return <IconCar />;
    }
    if (icon === 'bike') {
      return <IconBike />;
    }
    if (icon === 'qrpay') {
      return <IconQRHistory />;
    }
    if (icon === 'topup') {
      return <IconTopUpHistory />;
    }
    if (icon === 'withdraw') {
      return <IconWithdrawHistory />;
    }
    return <IconCar />;
  };
  return (
    <View style={styles.container}>
      <Icon />
      <View style={styles.info}>
        <Text style={styles.desc}>{desc}</Text>
        <Text style={styles.amount}>{amount}</Text>
      </View>
      {clickable && (
        <TouchableOpacity onPress={onPress}>
          <IconNext />
        </TouchableOpacity>
      )}
      {!clickable && <Text style={styles.date}>{date}</Text>}
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 4,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 21,
  },
  info: {flex: 1, marginLeft: 16},
  amount: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
  },
});
