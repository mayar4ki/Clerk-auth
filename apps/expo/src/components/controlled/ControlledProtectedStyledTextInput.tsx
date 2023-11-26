import React from 'react';
import { Controller } from 'react-hook-form';
import { ProtectedStyledTextInput } from '../styled/ProtectedStyledTextInput';
import type { StyledTextInputProps } from '../styled/StyledTextInput';

export type ControlledProtectedStyledTextInputProps = StyledTextInputProps & {
  name: string;
  control: any;
};

export const ControlledProtectedStyledTextInput = (
  props: ControlledProtectedStyledTextInputProps,
) => {
  const { name, control, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <ProtectedStyledTextInput
          value={value}
          onBlur={onBlur}
          onChangeText={onChange}
          {...rest}
        />
      )}
    />
  );
};

