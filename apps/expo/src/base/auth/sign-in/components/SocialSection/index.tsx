
import React from 'react';
import { View } from 'react-native';
import { TouchableRipple } from 'react-native-paper';
// import { FacebookIcon } from '~/components/icons/FacebookIcon';
// import { TwitterIcon } from '~/components/icons/TwitterIcon';
import { Typography } from '~/components/styled/Typography';

import { styled } from 'nativewind';
import { GoogleAuth } from './GoogleAuth';

const StyledTouchableRipple = styled(TouchableRipple);

export const SocialSection = () => {






    return (
        <View className=' flex-1 mb-2 flex-col justify-between'>
            <View className=' flex-1 flex justify-center'>
                <Typography
                    variant="bodyLarge"
                    color="outline"
                    style={{
                        alignSelf: 'center',
                    }}
                >
                    OR Continue With
                </Typography>
                <View className=' flex flex-row justify-center py-6  gap-x-8'>

                    <GoogleAuth />
                    {/* <StyledTouchableRipple
                        onPress={() => { }}
                        borderless
                        className=' border border-gray-300
                rounded-full p-2 overflow-hidden
                '>
                        <FacebookIcon width={25} height={25} />
                    </StyledTouchableRipple>
                    <StyledTouchableRipple
                        onPress={() => { }}
                        borderless
                        className=' border border-gray-300
                rounded-full p-2 overflow-hidden
                '>
                        <TwitterIcon width={25} height={25} />
                    </StyledTouchableRipple> */}


                </View>
            </View>


        </View>
    )
}
