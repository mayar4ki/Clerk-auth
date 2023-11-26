import React from 'react';
import type { TextInputProps } from 'react-native-paper';
import { TextInput, useTheme } from 'react-native-paper';
import { Typography, type TypographyProps } from './Typography';

export type StyledTextInputProps = Omit<TextInputProps, 'theme'> & {
  helperText?: string;
  helperTextProps?: Omit<TypographyProps, 'theme' | 'children'>;
};

export const StyledTextInput = (props: StyledTextInputProps) => {
  const { colors } = useTheme();
  return (
    <>
      <TextInput
        theme={{ roundness: 5 }}
        outlineStyle={{
          borderWidth: 0,
          shadowColor: `${colors.primary}aa`,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        dense
        {...props}
      />


      <Typography
        variant="bodySmall"
        color={props.error ? 'error' : 'outline'}
        {...props.helperTextProps}
        style={{
          marginVertical: 4,
          ...(props?.helperTextProps?.style ?? {}),
        }}

      >
        {props.helperText}
      </Typography>
    </>
  );
};
