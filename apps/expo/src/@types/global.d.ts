import type { MD3Colors } from 'react-native-paper/src/types';
import type reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: Required<typeof reactotron>;
  }

}

declare global {
  namespace RNPaper {
    type Colors = MD3Colors & {
      success: string
    };

    type Theme = {
      //  myOwnProperty: boolean;
    } & Omit<MD3Theme, 'colors'> & { colors: Colors };
  }
}

export { };


