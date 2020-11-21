import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILTransfer} from '../../assets';
import {Button, Gap, Header, Input} from '../../components';
import {colors} from '../../utils';

const Transfer = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Transfer"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Image source={ILTransfer} style={styles.img} />
      </View>
      <View style={styles.wrapper}>
        <Input placeholder="Nominal Transfer" />
        <Gap height={16} />
        <Input placeholder="Nomor Handphone Penerima" />
        <Gap height={20} />
        <Text>useEffect here.</Text>
        <Button
          title="Check"
          onPress={() => navigation.replace('TransferSuccess')}
        />
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  container: {alignItems: 'center'},
  img: {height: 172, width: 240, marginTop: 36, marginBottom: 20},
  wrapper: {paddingHorizontal: 40},
});
