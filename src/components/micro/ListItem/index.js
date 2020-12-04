import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const ListItem = ({desc, value}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <Text style={styles.key}>{desc}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  circle: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
    borderColor: 'red',
  },
  key: {
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    fontSize: 16,
    flex: 1,
    marginLeft: 12,
  },
  value: {
    fontFamily: fonts.primary.normal,
    fontSize: 16,
    color: colors.text.secondary,
  },
});
