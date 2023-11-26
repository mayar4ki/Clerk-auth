import { merge } from 'lodash-es';
import React from 'react';
import { Text, useTheme } from 'react-native-paper';
import { type Props as TextProps } from 'react-native-paper/src/components/Typography/Text';
type ThemeColors = keyof RNPaper.Colors;

export type TypographyProps = TextProps<string> & { color?: ThemeColors };

export const Typography = (props: TypographyProps) => {
  const { colors } = useTheme();

  const style = merge(props.style, { color: props.color ? colors[props.color].toString() : colors.primary })

  return <Text {...props}
    style={style}
  />;
};
