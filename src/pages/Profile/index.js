import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Button, Gap, Header, ListItem, UserProfile} from '../../components';
import {colors, fonts} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={40} />
      <View style={styles.imageWrapper}>
        <Image source={DummyUser} style={styles.avatar} />
      </View>
      <Gap height={24} />
      <Text style={styles.text}>User Information</Text>
      <Gap height={20} />
      <ListItem desc="Full Name" value="Muhammad Revaldi" />
      <ListItem desc="Nomor Handphone" value="08165792031" />
      <ListItem desc="Email" value="username@email.com" />
      <ListItem desc="Total Vehicle" value="4" />
      <Gap height={40} />
      <View style={styles.btnWrapper}>
        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('EditProfile')}
        />
        <Gap height={16} />
        <Button
          title="Sign Out"
          type="Secondary"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  imageWrapper: {alignItems: 'center'},
  avatar: {height: 120, width: 120},
  btnWrapper: {paddingHorizontal: 20},
  text: {fontFamily: fonts.primary[600], fontSize: 20, paddingLeft: 20},
});
