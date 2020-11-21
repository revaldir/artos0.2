import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconTransaction} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Transaction = () => {
  return (
    <View style={styles.container}>
      <IconTransaction style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.amount}>Rp. 72.000</Text>
        <Text style={styles.desc}>Transfer ke 0826xxx</Text>
      </View>
      <Text style={styles.date}>26/10/2020</Text>
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 4,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  icon: {marginRight: 12},
  info: {flex: 1},
  amount: {
    fontSize: 14,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
  },
  desc: {
    fontSize: 12,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
  },
  date: {
    fontSize: 14,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
});
