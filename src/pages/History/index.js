import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Transaction} from '../../components/macro';
import {Gap} from '../../components/micro';
import {colors} from '../../utils';

const History = () => {
  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Gap height={30} />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Transaction />
          <Gap height={30} />
        </View>
      </ScrollView>
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    backgroundColor: colors.background,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20,
  },
});
