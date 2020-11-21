import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../../assets';
import {colors, fonts} from '../../../utils';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.borderPhoto}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      <Text style={styles.name}>Muhammad Revaldi Rahman</Text>
      <Text style={styles.desc}>081910278365</Text>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center'},
  avatar: {width: 110, height: 110, borderRadius: 110 / 2},
  borderPhoto: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 10,
    borderColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontFamily: fonts.primary[500],
    color: colors.text.primary,
    textAlign: 'center',
    marginTop: 24,
  },
  desc: {
    fontSize: 16,
    fontFamily: fonts.primary[500],
    color: colors.text.secondary,
    textAlign: 'center',
    marginTop: 5,
  },
});
