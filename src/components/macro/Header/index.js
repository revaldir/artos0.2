import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button, Gap} from '../../micro';

const Header = ({onPress, title, noPress}) => {
  return (
    <View style={styles.wrapper}>
      {!noPress && <Button type="icon-only" onPress={onPress} />}
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  text: {
    textAlign: 'center',
    flex: 1,
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.primary[500],
  },
});
