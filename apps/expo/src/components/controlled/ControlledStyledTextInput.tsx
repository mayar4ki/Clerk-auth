import React from 'react';
import { Controller } from 'react-hook-form';
import type { StyledTextInputProps } from '../styled/StyledTextInput';
import { StyledTextInput } from '../styled/StyledTextInput';

export type ControlledStyledTextInputProps = StyledTextInputProps & {
  name: string;
  control: any;
};

export const ControlledStyledTextInput = (
  props: ControlledStyledTextInputProps,
) => {
  const { name, control, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <StyledTextInput
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          {...rest}
        />
      )}
    />
  );
};

