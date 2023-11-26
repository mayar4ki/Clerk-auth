
import React from 'react';
import { View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import { Typography } from '~/components/styled/Typography';
import { api } from '~/utils/trpc';




export const HomeScreen = () => {
    const { colors } = useTheme()


    const { data, error, isLoading, refetch, isFetching } = api.health.useQuery()
    return (
        <View
            style={{ backgroundColor: colors.background }}
            className=" flex-1 bg-purple-500 ">

            <Typography variant='displaySmall'>
                Home
                {data && data?.message}
                {error && 'error'}
                {isLoading && 'isLoading'}
                {isFetching && 'isFetching'}
            </Typography>

            <Button
                onPress={() => {
                    refetch()
                }}
                mode='contained'
            >
                KO
            </Button>

        </View>
    )
}
