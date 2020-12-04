import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHistory,
  IconHistoryActive,
  IconHome,
  IconHomeActive,
  IconVehicle,
  IconVehicleActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'History') {
      return active ? <IconHistoryActive /> : <IconHistory />;
    }
    if (title === 'Vehicle') {
      return active ? <IconVehicleActive /> : <IconVehicle />;
    }
    return <IconHome />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontSize: 10,
    fontFamily: fonts.primary[600],
    marginTop: 2,
  }),
});
