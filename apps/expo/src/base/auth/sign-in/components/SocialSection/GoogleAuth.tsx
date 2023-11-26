/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import { Button, Portal, TouchableRipple } from 'react-native-paper';
// import { FacebookIcon } from '~/components/icons/FacebookIcon';
import { GoogleIcon } from '~/components/icons/GoogleIcon';
// import { TwitterIcon } from '~/components/icons/TwitterIcon';

import { useOAuth } from '@clerk/clerk-expo';
import { type StartOAuthFlowReturnType } from '@clerk/clerk-expo/dist';
import BottomSheet, { BottomSheetBackdrop, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import * as Linking from 'expo-linking';
import { omit } from 'lodash-es';
import { styled } from 'nativewind';
import { useRef } from 'react';
import { StyledTextInput } from '~/components/styled/StyledTextInput';

const StyledTouchableRipple = styled(TouchableRipple);

export const GoogleAuth = () => {

    const [missingFields, setMissingFields] = useState<Array<{
        name: string, value: string, error?: string
    }>>([]);

    const bottomSheetRef = useRef<BottomSheet>(null);
    const signUpRef = useRef<StartOAuthFlowReturnType['signUp']>();
    const activeRef = useRef<StartOAuthFlowReturnType['setActive']>();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google", redirectUrl: Linking.createURL('') });

    const signUpWithGoogle = useCallback(async () => {


        const { createdSessionId, setActive, signUp } = await startOAuthFlow({});

        if (createdSessionId) {
            await setActive?.({ session: createdSessionId });
        } else {

            signUpRef.current = signUp;
            activeRef.current = setActive;
            if (signUp && signUp?.missingFields?.length > 0) {
                setMissingFields(signUp.missingFields.map(el => ({ name: el, value: '' })))
                bottomSheetRef.current?.snapToIndex(0, { damping: 20 });
            }
        }
    }, []);


    const HandleCallback = async () => {

        bottomSheetRef.current?.close();
        const signUp = signUpRef.current;
        const setActive = activeRef.current;

        const data: Record<string, string> = {};

        missingFields.forEach(el => {
            data[el.name] = el.value
        })

        await signUp?.update(data).then(res => {

            if (signUp && signUp?.missingFields?.length > 0) {
                setMissingFields(signUp.missingFields.map(el => ({ name: el, value: '' })))
                bottomSheetRef.current?.snapToIndex(0, { damping: 20 });
            }

            res.createdSessionId && setActive?.({ session: res.createdSessionId });

        }).catch((err: { errors: Array<{ message: string, meta: { paramName: string } }> }) => {
            bottomSheetRef.current?.snapToIndex(0, { damping: 20 });
            setMissingFields(missingFields.map(el => {
                const message = err.errors.find(x => x.meta.paramName === el.name);
                return message ? { ...el, error: message.message } : omit(el, ['error'])
            }))
        })



    }



    return (
        <>

            <StyledTouchableRipple
                onPress={() => {
                    void signUpWithGoogle()
                }}
                borderless
                className=' border border-gray-300
                rounded-full p-2 overflow-hidden -mr-7
                '>
                <GoogleIcon width={25} height={25} />
            </StyledTouchableRipple>

            <Portal>
                <BottomSheet

                    backdropComponent={p => <BottomSheetBackdrop  {...p} disappearsOnIndex={-1}
                        pressBehavior='none'
                    />}
                    ref={bottomSheetRef}
                    index={-1}
                    snapPoints={['60%']}

                >
                    <BottomSheetScrollView
                        style={{ paddingHorizontal: 24 }}
                        contentContainerStyle={{ display: 'flex', justifyContent: 'space-between', flex: 1, paddingBottom: 44 }}
                    >
                        <View className='mt-8'>
                            {missingFields.map((el) => {
                                return <StyledTextInput
                                    key={el.name}
                                    mode='outlined'
                                    label={el.name.replaceAll('_', " ")}
                                    value={el.value}
                                    error={!!el.error}
                                    onChangeText={text => setMissingFields(missingFields.map(e => e.name === el.name ? { ...e, value: text } : e))}
                                    helperText={el.error ?? 'Enter value please'}
                                />
                            })}
                        </View>


                        <Button
                            onPress={() => void HandleCallback()}
                            mode='contained'>
                            Continue
                        </Button>

                    </BottomSheetScrollView>
                </BottomSheet>
            </Portal>
        </>
    )
}
