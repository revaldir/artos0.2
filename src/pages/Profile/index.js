import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, UserProfile} from '../../components';
import {colors} from '../../utils';

const Profile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Gap height={40} />
        <UserProfile />
        <Gap height={36} />
        <View style={styles.btnWrapper}>
          <Button title="Edit Profile" />
          <Gap height={24} />
          <Button title="Change Password" />
          <Gap height={24} />
          <Button
            title="LOGOUT"
            type="Secondary"
            onPress={() => navigation.replace('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    backgroundColor: colors.background,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  btnWrapper: {paddingHorizontal: 20},
});
