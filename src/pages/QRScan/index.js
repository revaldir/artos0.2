import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Header} from '../../components';
import {colors} from '../../utils';

const QRScan = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="QR Payment"
        type="dark"
        onPress={() => navigation.goBack()}
      />
      <Text>QR Scan here.</Text>
      <Button
        title="Dummy"
        type="Secondary"
        onPress={() => navigation.replace('TransactionDetail')}
      />
    </View>
  );
};

export default QRScan;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
});
