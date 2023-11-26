import React from 'react';
import { View } from 'react-native';
import { Typography } from '~/components/styled/Typography';



export const TitleSection = () => {
    return (
        <>
            <Typography className='my-8' variant='displaySmall'>
                ...
            </Typography>

            <View style={{ marginBottom: 45 }}>
                <Typography
                    variant="headlineSmall"

                    color="primary"
                    style={{
                        alignSelf: 'flex-start', fontWeight: 'bold'
                    }}>
                    Welcome Back !
                </Typography>
                <Typography
                    variant="bodyLarge"
                    color="primary"
                    style={{
                        alignSelf: 'flex-start',
                    }}>
                    Sign In to Continue
                </Typography>
            </View>
        </>
    )
}
