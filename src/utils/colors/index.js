/* eslint-disable prettier/prettier */
const mainColors = {
  red1: '#FF0000',
  dark1: 'rgba(73,90,117,0.58)',
  grey1: '#F6F6F6',
  grey2: '#8D8A8A',
  grey3: '#D3D3D3',
};

export const colors = {
  primary: mainColors.red1,
  secondary: mainColors.grey1,
  white: 'white',
  black: 'black',
  border: mainColors.grey3,
  btnBox: mainColors.red2,
  text: {
    primary: 'black',
    secondary: mainColors.grey2,
    menuActive: mainColors.red1,
    menuInactive: mainColors.dark1,
  },
  button: {
    primary: {
      background: mainColors.red1,
      text: 'white',
    },
    secondary: {
      background: 'transparent',
      text: mainColors.red1,
    },
  },
};
