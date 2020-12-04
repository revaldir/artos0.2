import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import Input from '../Input';

const ListEditItem = ({desc, placeholder}) => {
  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.item}>
        <Text style={styles.txt}>{desc}</Text>
        <Input placeholder={placeholder} />
      </View>
    </View>
  );
};

export default ListEditItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'flex-start',
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
  item: {flex: 1, paddingLeft: 12},
  txt: {fontFamily: fonts.primary[500], fontSize: 16, marginBottom: 16},
});
