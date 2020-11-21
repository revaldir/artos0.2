import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IconAddPhoto, ILNullPhoto} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Upload Photo" />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.avatarWrapper}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.icon} />
          </View>
          <Text style={styles.name}>Muhammad Revaldi Rahman</Text>
          <Text style={styles.number}>0819450356889</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link title="Skip for now" />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    paddingHorizontal: 40,
    paddingVertical: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {width: 110, height: 110},
  avatarWrapper: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  icon: {position: 'absolute', bottom: 8, right: 6},
  name: {
    fontSize: 20,
    color: colors.text.primary,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
  },
  number: {
    fontSize: 16,
    color: colors.text.secondary,
    fontFamily: fonts.primary[400],
    textAlign: 'center',
    marginTop: 4,
  },
  profile: {alignItems: 'center', flex: 1, justifyContent: 'center'},
});
