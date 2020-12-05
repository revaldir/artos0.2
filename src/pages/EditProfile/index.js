import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {DummyUser} from '../../assets';
import {Button, Gap, Header, ListEditItem} from '../../components';
import {colors} from '../../utils';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Edit Profile" onPress={() => navigation.goBack()} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Gap height={40} />
        <View style={styles.imageWrapper}>
          <Image source={DummyUser} style={styles.avatar} />
        </View>
        <Gap height={24} />
        <ListEditItem desc="Full Name" />
        <Gap height={12} />
        <ListEditItem desc="Nomor Handphone" />
        <Gap height={12} />
        <ListEditItem desc="Email" />
        <Gap height={12} />
        <ListEditItem desc="Password" />
        <View style={styles.btnWrapper}>
          <Button title="Update Profile" onPress={() => navigation.goBack('UserProfile')}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  imageWrapper: {alignItems: 'center'},
  avatar: {height: 120, width: 120},
  btnWrapper: {padding: 40},
});
