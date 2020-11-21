import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const TextBox = ({txtPrim, txtSec, txtTert}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textSecondary}>{txtSec}</Text>
      <Text style={styles.textPrimary}>{txtPrim}</Text>
      {txtTert && <Text style={styles.textTertiary}>{txtTert}</Text>}
    </View>
  );
};

export default TextBox;

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 280,
    borderWidth: 1,
    borderColor: colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  textSecondary: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginBottom: 12,
  },
  textPrimary: {
    fontSize: 20,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
  },
  textTertiary: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
    marginTop: 2,
  },
});
