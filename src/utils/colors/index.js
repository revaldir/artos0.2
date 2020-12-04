/* eslint-disable prettier/prettier */
const mainColors = {
  blue1: '#FF0000',
  blue2: '#FF0000',
  blue3: '#E9ECF5',
  dark1: '#112340',
  dark2: 'rgba(73,90,117,0.58)',
  grey1: '#7D8797',
  grey2: '#D3D3D3',
  red1: '#FF0000',
  red2: 'black',
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.blue2,
  white: 'white',
  black: 'black',
  background: mainColors.blue3,
  border: mainColors.grey2,
  btnBox: mainColors.red2,
  text: {
    primary: mainColors.dark1,
    primary1: mainColors.red1,
    secondary: mainColors.grey1,
    menuActive: mainColors.blue1,
    menuInactive: mainColors.dark2,
  },
  button: {
    primary: {
      background: mainColors.blue1,
      text: 'white',
    },
    secondary: {
      background: 'transparent',
      text: mainColors.red1,
    },
  },
};
