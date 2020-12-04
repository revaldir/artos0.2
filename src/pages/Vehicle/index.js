import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconAdd} from '../../assets';
import {Gap, VehicleCard} from '../../components';
import {colors, fonts} from '../../utils';

const Vehicle = ({navigation}) => {
  return (
    <View style={styles.page}>
      <View style={styles.content}>
        <Gap height={30} />
        <Text style={styles.mainText}>Vehicle</Text>
        <Gap height={24} />
        <ScrollView>
          <VehicleCard
            type="car"
            onPress={() => navigation.navigate('EditVehicle')}
          />
          <Gap height={24} />
          <VehicleCard type="bike" />
          <Gap height={24} />
          <VehicleCard type="bike" />
        </ScrollView>
        <TouchableOpacity
          style={styles.plus}
          onPress={() => navigation.navigate('AddVehicle')}>
          <IconAdd />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Vehicle;

const styles = StyleSheet.create({
  page: {backgroundColor: colors.white, flex: 1},
  content: {
    backgroundColor: colors.secondary,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  mainText: {fontFamily: fonts.primary[600], fontSize: 24},
  plus: {alignItems: 'center', paddingBottom: 40},
});
