import { Ionicons } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import type { ScreenProps } from 'expo-router/build/useScreens';
import React from 'react';
import { View } from 'react-native';
import { IconButton, useTheme } from 'react-native-paper';
import { Typography } from '../styled/Typography';

export type CostumeNavigationHeaderProps = {
    options?: ScreenProps['options']
}

export const CostumeNavigationHeader = (props: CostumeNavigationHeaderProps) => {
    const { colors } = useTheme<RNPaper.Theme>();
    const { back } = useRouter();

    return (
        <Stack.Screen options={{
            headerLeft(props) {
                return <View className=' flex flex-row items-center  -ml-2'>
                    <IconButton
                        style={{ margin: 0 }}
                        onPress={() => {
                            back()
                        }}
                        icon={() => <Ionicons
                            name="chevron-back" size={34} color={colors.secondary} />}
                    />
                    <Typography
                        onPress={() => {
                            back()
                        }}
                        variant='bodyLarge' color='secondary' >
                        Back
                    </Typography>
                </View>
            },
            headerStyle: {
                backgroundColor: colors.background,
            }, headerTitleAlign: 'center',
            title: '',
            headerShadowVisible: false,
            ...props.options
        }} />
    )
}
