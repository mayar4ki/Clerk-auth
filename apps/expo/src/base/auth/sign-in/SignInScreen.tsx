import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Portal, TextInput, useTheme } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as yup from 'yup';
// import {getDeviceToken} from '@src/utilities/getDeviceToken';
import { useSignIn } from '@clerk/clerk-expo';
import { View } from 'react-native';
import { LoadingScreen } from '~/components/LoadingScreen';
import { ControlledProtectedStyledTextInput } from '~/components/controlled/ControlledProtectedStyledTextInput';
import { ControlledStyledTextInput } from '~/components/controlled/ControlledStyledTextInput';
import { Typography } from '~/components/styled/Typography';
import { useAlertDialog } from '~/store/useAlertDialog';
import { SocialSection } from './components/SocialSection';
import { TermsAndPolicyLink } from './components/TermsAndPolicyLink';
import { TitleSection } from './components/TitleSection';



const form = yup
    .object({
        email: yup.string().required().email('${path} must be valid'),
        password: yup.string().required(),
    })
    .required();

type Form = yup.InferType<typeof form>

const SignInScreen = () => {
    const { colors } = useTheme();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<Form>({
        resolver: yupResolver(form),
        defaultValues: {

        },
    });


    const setAlert = useAlertDialog(state => state.set)
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { signIn, setActive } = useSignIn();
    const onSubmit = async (data: Form) => {
        setIsLoading(true)
        try {
            const completeSignIn = await signIn?.create({
                identifier: data.email,
                password: data.password,
            });
            completeSignIn && setActive?.({ session: completeSignIn.createdSessionId });
        } catch (err: any) {
            setAlert((err?.errors?.map((el: any) => el.message) ?? []).join('\n'))
        }
        setIsLoading(false)
    };

    return (<SafeAreaView
        style={{
            backgroundColor: colors.background
        }}
        className=' flex-1 '>
        <KeyboardAwareScrollView
            showsVerticalScrollIndicator={false}
            className=' px-4   '
            contentContainerStyle={{
                flex: 1
            }}
        >
            {isLoading && <Portal>
                <View className=' flex-1 opacity-80 '>
                    <LoadingScreen />
                </View>
            </Portal>}

            <TitleSection />
            <ControlledStyledTextInput
                name="email"
                control={control}
                error={!!errors.email?.message}
                label="Email"
                mode='outlined'
                keyboardType="email-address"
                helperText={errors.email?.message ?? "Enter Email please"}
                left={
                    <TextInput.Icon color={colors.primary} icon="email" />
                }
            />

            <ControlledProtectedStyledTextInput
                name="password"
                control={control}
                mode='outlined'
                autoCorrect={false}
                error={!!errors.password?.message}
                helperText={errors.password?.message ?? "Enter Password please"}
                label="Password"
                left={
                    <TextInput.Icon color={colors.primary} icon="lock" />
                }
            />
            <Button
                className=' self-end -mt-4'
                onPress={() => { }}>
                <Typography
                    variant="bodyMedium"
                    color="outline"
                    style={{
                        alignSelf: 'flex-end',
                    }}>
                    Forgot Password.?
                </Typography>
            </Button>

            <Button
                className=' my-6 '
                onPress={handleSubmit(onSubmit)}
                mode="contained">


                SIGN IN

            </Button>
            <View className=' flex-1 pb-3' >

                <SocialSection />
                <TermsAndPolicyLink />
            </View>
        </KeyboardAwareScrollView>
    </SafeAreaView>

    );
};

export default SignInScreen



