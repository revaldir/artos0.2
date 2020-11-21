import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Balance = () => {
  return (
    <View>
      <Text style={styles.text}>Saldo</Text>
      <Text style={styles.bal}>Rp. 2.135.235.000</Text>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginBottom: 4,
  },
  bal: {fontSize: 24, fontFamily: fonts.primary[600], color: colors.black},
});
