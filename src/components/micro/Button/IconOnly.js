import React from 'react';
import {TouchableOpacity} from 'react-native';
import {IconBack} from '../../../assets';

const IconOnly = ({onPress}) => {
  const Icon = () => {
    return <IconBack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;
