/* eslint-disable prettier/prettier */
import React from 'react';
import {Image,StyleSheet, View, Text} from 'react-native';
import {ILLogo} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';

const Login = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
      <Image source={ILLogo} style={styles.image} />
      
      </View>
      <Text style={styles.text}>Log In</Text>
      <Text>Please sign in to continue using our app.</Text>
      <Input placeholder="Email" />
      <Gap height={32} />
      <Input placeholder="Password" />
      <Gap height={48} />
      <Button title="Login" onPress={() => navigation.replace('MainApp')} />
      <Gap height={5} />
      <Link onPress={() => navigation.navigate('Register')} title="Don't Have Account? Register"/>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    marginBottom: 40,
    alignItems: 'center',
  },
  image: {marginTop:70},
 
    text: {
      fontSize: 25,
      color: colors.text.primary1,
    
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    alignContent:'center',
},
});
