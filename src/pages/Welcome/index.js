import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Link} from '../../components';
import {colors, fonts} from '../../utils';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.mainText}>Welcome</Text>
        <Text style={styles.secText}>
          Please sign in or sign up to continue using our app.
        </Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image source={ILLogo} style={styles.image} />
      </View>
      <View>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Link
          title="Sign In Instead."
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
    padding: 32,
    justifyContent: 'space-between',
  },
  mainText: {
    fontFamily: fonts.primary[700],
    fontSize: 30,
    color: colors.primary,
    marginBottom: 20,
  },
  secText: {fontFamily: fonts.primary[600], fontSize: 14, maxWidth: 182},
  image: {height: 180, width: 180},
  imageWrapper: {alignItems: 'center'},
});
