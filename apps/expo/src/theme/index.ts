import { DefaultTheme, type MD3Theme } from 'react-native-paper';
import { lightScheme } from './lightScheme';
import { textVariants } from './textVariants';



const theme: MD3Theme = {
  ...DefaultTheme, fonts: textVariants,
  roundness: 1

};

export const createTheme = (options?: unknown): MD3Theme => {

  const colors = lightScheme;

  return { ...theme, colors };
};
