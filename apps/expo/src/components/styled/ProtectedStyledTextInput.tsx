import React, { useState } from 'react';
import { TextInput, useTheme } from 'react-native-paper';
import { StyledTextInput, type StyledTextInputProps } from './StyledTextInput';

export type ProtectedStyledTextInputProps = StyledTextInputProps

export const ProtectedStyledTextInput = (props: ProtectedStyledTextInputProps) => {

  const [show, setShow] = useState<boolean>(true);
  const theme = useTheme();

  return <StyledTextInput
    secureTextEntry={show}
    {...props}
    right={
      <TextInput.Icon
        color={theme.colors.outline}
        onPress={() => setShow(!show)}
        icon={show ? 'eye-off' : 'eye'}
      />
    }
  />

};

