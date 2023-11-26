import React from 'react'
import { View } from 'react-native'
import { ProgressBar, useTheme } from 'react-native-paper'
import { Typography } from './styled/Typography'

export const LoadingScreen = ({ children }: { children?: React.ReactNode }) => {
    const theme = useTheme();

    return (
        <View
            style={{ backgroundColor: theme.colors.background }}
            className='flex-1 flex justify-center items-center '>
            {children}
            <View className=' '>
                <Typography variant='displayMedium'>
                    Hello
                </Typography>
                <ProgressBar indeterminate
                    theme={{
                        colors: {
                            primary: theme.colors.secondary
                        }
                    }}
                />
            </View>

        </View>
    )
}
